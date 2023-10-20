import { Tag } from './styles'

import { FiPlus, FiX } from 'react-icons/fi'

export const IngridientTag = ({ title, isNew, value, onClick, ...rest }) => {
  return (
    <Tag isNew={!isNew}>
      <input type="text" readOnly={!isNew} value={value} {...rest} />
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Tag>
  )
}
