import React from 'react'

function user() {
  return (
    <div className='p-5 bg-light'>
      <div className='bg-white rounded p-4'>
        <table class="table caption-top">
          <caption className='text-black fs-4' >Recent Orders</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Larry</td>
              <td>The Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Moise</td>
              <td>Toto</td>
              <td>@xgram</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default user
