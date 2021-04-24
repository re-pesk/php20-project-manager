import React from 'react'

export default function Footer({ fixedBottom = false }) {

const style = (fixedBottom) => {
    if (fixedBottom) {
        return {
          backgroundColor: '#17a2b8',
          color: 'white',
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
        }
    } else {
      return {
          backgroundColor: '#17a2b8',
          color: 'white',
        }
    }
}

  return (
    <div
      id="footer"
      className="d-flex justify-center mt-4 p-3 mx-auto"
      style={style(fixedBottom)}
    >
      <footer className="footer">
        <span>
          &copy; 2021 PHProjectMan team.
        </span>
      </footer>
    </div>
  )
}
