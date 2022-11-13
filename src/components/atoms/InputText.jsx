import PropTypes from 'prop-types'

function InputText({ id, onChange, ...rest }) {
  return <input type="text" id={id} name={id} onChange={onChange} {...rest} />
}

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputText
