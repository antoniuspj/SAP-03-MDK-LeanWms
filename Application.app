{
	"_Name": "SoltiusInnovMdk",
	"Version": "/SoltiusInnovMdk/Globals/AppDefinition_Version.global",
	"MainPage": "/SoltiusInnovMdk/Pages/Main.page",
	"OnLaunch": [
		"/SoltiusInnovMdk/Actions/GoodsIssue/Service/CreateService.action",
		"/SoltiusInnovMdk/Actions/GoodsReceipt/Service/CreateService.action",
		"/SoltiusInnovMdk/Actions/StockCount/Service/CreateService.action"
	],
	"OnWillUpdate": "/SoltiusInnovMdk/Rules/OnWillUpdate.js",
	"Styles": "/SoltiusInnovMdk/Styles/Styles.less",
	"Localization": "/SoltiusInnovMdk/i18n/i18n.properties"
}