import Request from '../js_sdk/pocky-request/index'

export  const getFltByStdRange  = function(stdFrom, stdTo) {
		return Request().get('/b2e-flightinfo/getflightinfoByStdRange',{
			data: {'stdFrom':stdFrom, 'stdTo':stdTo}
		})
	}
export const getFltAcars = function(acId,msgTimeFromUtc , msgTimeToUtc ) {
		return Request().get('/acars/getAcPosByUTC',{
			data: {'acId':acId,'msgTimeFromUtc':msgTimeFromUtc, 'msgTimeToUtc':msgTimeToUtc}
		})
	}

export const getflightinfoByFltPk = function(fltPk) {
	return Request().get('/b2e-flightinfo/getflightinfoByFltPk',{
		data: {
			'fltPk': fltPk
		}
	})
}