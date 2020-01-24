import Request from '../js_sdk/pocky-request/index'

export default {
	getFltByStdRange(stdFrom, stdTo) {
		return Request().get('/b2eflightinfo/getflightinfoByStdRange',{
			data: {'stdFrom':stdFrom, 'stdTo':stdTo}
		})
	},
	getFltAcars(acId,msgTimeFromUtc , msgTimeToUtc ) {
		return Request().get('/acars/getAcPosByUTC',{
			data: {'acId':acId,'stdFrom':stdFrom, 'stdTo':stdTo}
		})
	}
}