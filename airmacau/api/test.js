import Request from '../js_sdk/pocky-request/index'

export default {
	testServer() {
		return Request().get('https://axh.airmacau.com.cn/',{
			
		})
	}
}