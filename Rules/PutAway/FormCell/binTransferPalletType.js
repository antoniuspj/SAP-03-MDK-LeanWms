var FCPalletSelectedValue, FCTotalQuantity;
export default function binTransferPalletType(clientAPI) {

	let pageProxy = clientAPI.getPageProxy();
	FCPalletSelectedValue = pageProxy.evaluateTargetPath('#Control:FCPallet/#SelectedValue');
	FCTotalQuantity = pageProxy.evaluateTargetPath('#Control:FCTotalQuantity');

	if (FCPalletSelectedValue == "Full") {
		FCTotalQuantity.setEditable(true);

	} else {
		FCTotalQuantity.setEditable(false);
	}

}