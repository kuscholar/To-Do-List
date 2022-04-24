import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
        <h1> {title="My To Do List"}</h1>
        <Button color={showAdd ? 'darkred' : 'green'} text={showAdd ? 'Close' : 'Add Task'} onClick={onAdd}/>
        
    </header>
  )
}

Header.defaultProps = {
    title: 'My To Do List'
}

// Header.PropTypes = {
//     title: PropTypes.string.isRequired,
// }

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header