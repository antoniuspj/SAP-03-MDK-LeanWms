var quantity, palletSize, fullPallet, clientAPI, partialPallet, FCFullPallet, FCPartialPallet;

/**
 * Describe this function...
 */
export default function testRule(clientAPI) {
	let pageProxy = clientAPI.getPageProxy();
	FCFullPallet = pageProxy.evaluateTargetPath('#Control:FCFullPallet');
	FCPartialPallet = pageProxy.evaluateTargetPath('#Control:FCPartialPallet');
	palletSize = parseInt(pageProxy.evaluateTargetPath('#Control:FCAssignPalette/#SelectedValue'));
	quantity = parseInt(pageProxy.evaluateTargetPath('#Control:FCQuantityUOM/#Value'));
	fullPallet = Math.floor(palletSize / quantity);
	partialPallet = palletSize % quantity;

	FCFullPallet.setValue(fullPallet);
	FCPartialPallet.setValue(partialPallet);
	FCFullPallet.redraw();
	FCPartialPallet.redraw();


}

//let listPickerProxy = containerProxy.getControl('ListPickerFormCellSingle');
//let specifier = listPickerProxy.getTargetSpecifier;
//specifier.setDisplayValue("{OrderDescription}");