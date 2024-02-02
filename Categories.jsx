import React from 'react'

function Categories() {
  return (
    <div className="container mt-6">
    <div className="row">
      <div className="col-md-2">
        <div className="card">
          <img src="pic1.png" className="card-img-top" alt=""  style={{ width: '100%', height: '150px' }}/>
          <div className="card-body">
            <p className="card-text">Red Apple.</p>
            <p className="card-text">26items.</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card">
          <img src="pic2.png" className="card-img-top" alt="Image 2" style={{ width: '100%', height: '150px' }}/>
          <div className="card-body">
              <p className="card-text">Mango.</p>
              <p className="card-text">10pieces.</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card">
          <img src="pic3.png" className="card-img-top" alt="Image 3" style={{ width: '100%', height: '150px' }}/>
          <div className="card-body">
            <p className="card-text">Strawberry.</p>
            <p className="card-text">25items.</p>
          </div>
        </div>
      </div>
      <div className="col-md-2">
      <div className="card">
        <img src="pic4.png" className="card-img-top" alt="Image 4" style={{ width: '100%', height: '150px' }} />
        <div className="card-body">
          <p className="card-text">Plum.</p>
          <p className="card-text">23 items.</p>
        </div>
      </div>
    
    </div>
    <div className="col-md-2">
      <div className="card">
        <img src="pic5.png" className="card-img-top" alt="Image 4" style={{ width: '100%', height: '150px' }} />
        <div className="card-body">
          <p className="card-text">Custard Apple.</p>
          <p className="card-text">20 items.</p>
        </div>
      </div>
    
    </div>
    <div className="col-md-2">
      <div className="card">
        <img src="pic6.png" className="card-img-top" alt="Image 4" style={{ width: '100%', height: '150px' }} />
        <div className="card-body">
          <p className="card-text">Kiwi.</p>
          <p className="card-text">12 items.</p>
        </div>
      </div>
    
    </div>
    
    
  </div>
</div>
  
  )
}

export default Categories