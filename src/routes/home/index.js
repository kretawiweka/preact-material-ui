import { h } from 'preact'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
// import Icon from '@material-ui/core/Icon'
import GitHubIcon from '@material-ui/icons/GitHub'

const Home = () => (
	<Container maxWidth="sm">
		<Box my={4}>
			<Typography variant="h4" gutterBottom align="center">
				Preact X + Material UI
			</Typography>
			<Typography variant="body2" color="textSecondary" align="center">
				<Button
					variant="contained"
					color="primary"
					href="https://github.com/kretawiweka/preact-material-ui"
				>
					<GitHubIcon style={{ margin: '0px 7px' }} />
					Github
				</Button>
			</Typography>
		</Box>
	</Container>
)
export default Home
