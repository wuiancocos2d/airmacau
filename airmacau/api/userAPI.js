import Request from '../js_sdk/pocky-request/index'

export default {
	loginUser(user) {
		return Request().post('/api/login',{
			data: user
		})
	}
}