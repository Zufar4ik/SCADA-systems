import CanvasHolst from './Components/Canvas';
import React from 'react';
import './App.css'



class App extends React.Component {

  render() {
    return (

      <div>
        <CanvasHolst />
      </div>
    )
  }

}


export default App;




/* ----------- Модальное окно (доработать) ---------- */


// class App extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { isModalOpen: false }
//   }
//   render() {
//     return (


//       <div>
//         <button onClick={() => this.openModal()}>123</button>
//           <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
//             <button className='closeModal' onClick={() => this.closeModal()}>Выход</button>
//           </Modal>
//       </div>
//     )
//   }

//   openModal() {
//     this.setState({ isModalOpen: true })
//   }

//   closeModal() {
//     this.setState({ isModalOpen: false })
//   }
// }


// class Modal extends React.Component {
//   render() {
//     if (this.props.isOpen === false)
//       return null

//     return (
//       <div>
//         <div className="modal">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   }
// }