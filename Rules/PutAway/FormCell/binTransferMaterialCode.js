var FCMaterialCode, FCDescription, FCBin, FCPalletID;
var qrCode;
export default function binTransferMaterialCode(clientAPI) {

	let pageProxy = clientAPI.getPageProxy();
	FCMaterialCode = pageProxy.evaluateTargetPath('#Control:FCMaterialCode');
	FCDescription = pageProxy.evaluateTargetPath('#Control:FCDescription');
	FCBin = pageProxy.evaluateTargetPath('#Control:FCBin');
	FCPalletID = pageProxy.evaluateTargetPath('#Control:FCPalletID');

	qrCode = FCMaterialCode.getValue().split("|");
	
	FCMaterialCode.setValue(qrCode[0]);
	FCDescription.setValue(qrCode[1]);
	FCBin.setValue(qrCode[2]);
	FCPalletID.setValue(qrCode[3]);

	FCMaterialCode.redraw();
	FCDescription.redraw();
	FCBin.redraw();
	FCPalletID.redraw();

}

/*FCPartialPallet = clientAPI.evaluateTargetPath('#Control:FCPartialPallet');
palletSize = parseInt(clientAPI.evaluateTargetPath('#Control:FCAssignPalette/#SelectedValue'));
quantity = parseInt(clientAPI.evaluateTargetPath('#Control:FCQuantityUOM/#Value'));
fullPallet = Math.floor(palletSize / quantity);
partialPallet = palletSize % quantity;

FCFullPallet.setValue(fullPallet);
FCPartialPallet.setValue(partialPallet);
FCFullPallet.redraw();
FCPartialPallet.redraw();
	alert('4');*/