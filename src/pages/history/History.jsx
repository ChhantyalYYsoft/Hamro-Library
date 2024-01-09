import React, { useEffect } from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBookListAction, updateBookAction } from '../../redux/book/bookAction';
import { getBorrowLisByUserIdtAction, getBorrowListAction, updateBorrowAction } from '../../redux/borrowHistory/borrorHistoryAction';
import { formatDate, isClient } from '../../utils';
import HistoryForm from '../../components/history/HistoryForm';

function History() {

    return (
        <AdminLayout title="History">
            <HistoryForm/>
        </AdminLayout>
    )
}

export default History