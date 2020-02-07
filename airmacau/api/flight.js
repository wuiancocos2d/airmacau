import Request from '../js_sdk/pocky-request/index'

export  const getFltByStdRange  = function(stdFrom, stdTo) {
		return Request().get('/b2eflightinfo/getflightinfoByStdRange',{
			data: {'stdFrom':stdFrom, 'stdTo':stdTo}
		})
	}
export const getFltAcars = function(acId,msgTimeFromUtc , msgTimeToUtc ) {
		return Request().get('/acars/getAcPosByUTC',{
			data: {'acId':acId,'msgTimeFromUtc':msgTimeFromUtc, 'msgTimeToUtc':msgTimeToUtc}
		})
	}

export const getflightinfoByFltPk = function(fltPk) {
	return Request().get('/b2eflightinfo/getflightinfoByFltPk',{
		data: {
			'fltPk': fltPk
		}
	})
}