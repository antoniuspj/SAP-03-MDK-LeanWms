var FCDestinationBin, FCConfirm;
export default function binTransferDestinationBin(clientAPI) {

	let pageProxy = clientAPI.getPageProxy();
	FCDestinationBin = pageProxy.evaluateTargetPath('#Control:FCDestinationBin');
	FCConfirm = pageProxy.evaluateTargetPath('#Control:FCConfirm');

	if (FCDestinationBin.getValue() != "") {
		FCConfirm.setValue("Yes");
	}

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