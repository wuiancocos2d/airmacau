//计算两个经纬度之间的距离
function Rad(d) {
			return d * Math.PI / 180.0;
		}
export  const DistanceByWGS = function(lng1, lat1, lng2, lat2) {
			var radLat1 = Rad(lat1);
			var radLat2 = Rad(lat2);
			var a = radLat1 - radLat2;
			var b = Rad(lng1) - Rad(lng2);
			var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
			s = s * 6378137.0; // 取WGS84标准参考椭球中的地球长半径(单位:m)
			s = Math.round(s * 10000) / 10000;
			console.log(s+ "  米");
			// //下面为两点间空间距离（非球面体）
			// var value= Math.pow(Math.pow(lng1-lng2,2)+Math.pow(lat1-lat2,2),1/2);
			// alert(value);
}

 