//计算两个经纬度之间的距离
function Rad(d) {
			return d * Math.PI / 180.0;
		}
// export  const DistanceByWGS = function(lng1, lat1, lng2, lat2) {
// 			var radLat1 = Rad(lat1);
// 			var radLat2 = Rad(lat2);
// 			var a = radLat1 - radLat2;
// 			var b = Rad(lng1) - Rad(lng2);
// 			var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
// 			s = s * 6378137.0; // 取WGS84标准参考椭球中的地球长半径(单位:m)
// 			s = Math.round(s * 10000) / 10000;
// 			console.log(s+ "  米");
// 			// //下面为两点间空间距离（非球面体）
// 			// var value= Math.pow(Math.pow(lng1-lng2,2)+Math.pow(lat1-lat2,2),1/2);
// 			// alert(value);
// }			
export const DistanceByWGS = function (lat1, lng1, lat2, lng2) {

    lat1 = lat1 || 0;

    lng1 = lng1 || 0;

    lat2 = lat2 || 0;

    lng2 = lng2 || 0;

    var rad1 = lat1 * Math.PI / 180.0;

    var rad2 = lat2 * Math.PI / 180.0;

    var a = rad1 - rad2;

    var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;

    var r = 6378137;

    console.log("distance",r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2))))

  }