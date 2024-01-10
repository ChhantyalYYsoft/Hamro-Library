import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { refEqual } from "firebase/firestore";
//import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase-config";
import { updateProfileAction } from "../../redux/auth/authAction";

function UserProfile() {
  const { userInfo } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setUserData(userInfo);
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };
    // Points to the root reference
    // const storageRef = ref(storage);

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `files/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // send updated url to update in the user table
          dispatch(updateProfileAction({ ...userData, url: downloadURL }));

          // reset input file value
          document.getElementById("fileInput").value = "";
        });
      }
    );
  };

  return (
    <>
      <AdminLayout title="Profile">
        <Container className="profile-box">
          <Row>
            <form onSubmit={handleSubmit} className="form">
              <Col md={{ span: 3, offset: 3 }}>
                <img className="profile-img1" src={userInfo.url} alt="Avatar" />
                {/* <br/>
                    <br/>
                    <Link to={""}>Edit Profile</Link> */}
              </Col>
              <Col>
                <br />
                <br />
                <p style={{ color: "blue" }}>Change Profile Picture ?</p>

                <input type="file" id="fileInput" />
                <button type="submit">Upload</button>

                <br />
                <br />
              </Col>
            </form>
          </Row>
          <br />
          <Row className="u-details-section ">
            <hr />
            <Col md={{ span: 3, offset: 3 }}>
              <b>Full Name:</b> {userInfo.fName} {userInfo.lName}
              <hr />
              <b>Email:</b> {userInfo.email}
              <hr />
              <b>Phone:</b> {userInfo.phone}
              <hr />
            </Col>
            <Col>
              <Link to={""}>Edit Profile</Link>
            </Col>
          </Row>
        </Container>
      </AdminLayout>
    </>
  );
}

export default UserProfile;
