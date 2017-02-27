var coupon = {
	expires: "June 15, 2014"
}

function checkCoupon(coupon) {
		var today = Date.parse(new Date())
		var expires = Date.parse(coupon.expires)

		console.log(today)
}