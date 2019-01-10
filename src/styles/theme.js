import { connect } from 'react-redux'

const withTheme = connect(state => ({ theme: state.theme.theme }))

export default withTheme
