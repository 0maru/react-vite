import {Button} from 'react-aria-components'
import {ReactElement} from 'react'

type Props = {
  icon: ReactElement
}

const IconButton = ({icon}: Props) => {
  return (
    <Button>
      {icon}
    </Button>
  )
}

export default IconButton