import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('click');
    }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Hello' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}
export default Header
