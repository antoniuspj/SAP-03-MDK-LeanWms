export default function NavToDetailPage(clientAPI) {
	var pageProxy = clientAPI.getPageProxy();
	// var pageProxy = context.getPageProxy();

	let appId = pageProxy.evaluateTargetPath('#Application/#ClientData/#Property:MobileServiceAppId');
	var deliveryID = pageProxy.evaluateTargetPath('#Page:GoodsIssue_Search/#Control:FormCellDeliveryID').getValue();
	let uri = "/HANADBSCP/mdk/hana/content/services/DeliveryOrderSRV.xsodata/DeliveryHeader('" + deliveryID + "')";
	let header = {
		"x-smp-appid": appId,
		"Accept": "application/json"
	};
	let params = {
		'method': 'GET',
		'header': header
	};

	return clientAPI.sendMobileServiceRequest(uri, params).then((result) => {
		if (result && result.statusCode === 200 && result.content) {
			//DO WHAT YOU NEED WITH THE result.content here e.g.
			let data = JSON.parse(result.content.toString());
			clientAPI.getPageProxy().setActionBinding({
				"@odata.editLink": "DeliveryHeader('" + data.d.DELIVERYID + "')",
				"@odata.id": "DeliveryHeader('" + data.d.DELIVERYID + "')",
				"@odata.readLink": "DeliveryHeader('" + data.d.DELIVERYID + "')",
				"@odata.type": "#mdk.hana.content.DeliveryHeaderType",
				SHIPTOPARTYNAME: data.d.SHIPTOPARTYNAME,
				DELIVERYID: data.d.DELIVERYID,
				DELIVERYPICKINGSTATUSCODE: data.d.DELIVERYPICKINGSTATUSCODE,
				SHIPTOPARTYID: data.d.SHIPTOPARTYID,
				DELIVERYGOODSISSUESTATUSCODE: data.d.DELIVERYGOODSISSUESTATUSCODE
			});
			return clientAPI.executeAction('/SoltiusInnovMdk/Actions/GoodsIssue/Navigation/NavToGoodsIssue_Detail.action');
		} else if (result) {
			console.log(result.statusCode);
		} else {
			console.log(result.content);
		}
	});
}