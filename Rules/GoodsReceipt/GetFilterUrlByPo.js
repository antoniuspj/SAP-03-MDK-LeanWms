var var_value, clientAPI, var_po, url;

/**
 * Describe this function...
 */
export default function GetFilterUrlByPo(clientAPI) {
	//
	// pj
	var_po = clientAPI.evaluateTargetPath('#Page:GoodsReceiptList/#Control:InputPoNumber/#Value');
	var_value = clientAPI.evaluateTargetPath('#Application/#ClientData/#Property:DeviceId');
	url = "$filter=(Ponumber eq '" + var_po + "' and Mdksysid eq '" + var_value + "')";
	return url;
}