import React from 'react'
import BaseLayout from '../../components/layouts/BaseLayout'
import HistoryForm from '../../components/history/HistoryForm'
import { ListGroup } from 'react-bootstrap'

function ClientHistory() {
  return (
    <>
        <BaseLayout>
        <div className='container history'>
            <div className='row'>
            <ListGroup>
                <HistoryForm/>
            </ListGroup>
            </div>
        </div>
                
        </BaseLayout>
    </>
  )
}

export default ClientHistory