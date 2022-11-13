import PropTypes from 'prop-types'
import styled from 'styled-components'
import { InputText, Label } from '../atoms'

export function InputTextGroup({ label, id, onChange, ...rest }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputText type="text" id={id} name={id} onChange={onChange} {...rest} />
    </div>
  )
}

InputTextGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default styled(InputTextGroup)``
