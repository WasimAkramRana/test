var pdf     =  require('html-pdf');
var moment  = require('moment');

/**
* This function is used for uploading files
**/
module.exports.generateAdminEmailBody = function(req, body, next) {
  var adminEmailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  	<title>Admin Email Template</title>
  </head>
  <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; background:#eeeee; -webkit-text-size-adjust:none">
  	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#EEEEEE">
  		<tr>
  			<td align="center" valign="top">
  				<!-- Top -->
  				<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#161616">
  					<tr>
  						<td align="center" valign="top">
  							<table width="600" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
  								<tr>
  									<td class="td" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; width:600px; min-width:600px; Margin:0" width="600">
  										<table width="100%" border="0" cellspacing="0" cellpadding="0">
  											<tr>
  												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  												<td>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td>
  																<div class="text-header" style="color:#666666; font-family:Arial, sans-serif; min-width:auto !important; font-size:12px; line-height:16px; text-align:left">
  																	<a href="#" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none"><img src="https://d1pgqke3goo8l6.cloudfront.net/ZBZBRNHoQoCRD4F8SSN0_ico_webversion.jpg" border="0" width="14" height="16" alt="" style="vertical-align: middle;" />&nbsp; Web Version</span></a>
  																</div>
  															</td>
  															<td>
  																<div class="text-header-1" style="color:#666666; font-family:Arial, sans-serif; min-width:auto !important; font-size:12px; line-height:16px; text-align:right">
  																	<a href="#" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none"><img src="https://d1pgqke3goo8l6.cloudfront.net/PyQZkzxDTBOmTLdM4C3S_ico_forward.jpg" border="0" width="14" height="16" alt="" style="vertical-align: middle;" />&nbsp; Forward</span></a>
  																</div>
  															</td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  												</td>
  												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  											</tr>
  										</table>
  									</td>
  								</tr>
  							</table>
  						</td>
  					</tr>
  				</table>
  				<!-- END Top -->

  				<table width="600" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
  					<tr>
  						<td class="td" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; width:600px; min-width:600px; Margin:0" width="600">
  							<!-- Header -->
  							<table width="100%" border="0" cellspacing="0" cellpadding="0">
  								<tr>
  									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  									<td>
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  										<div class="img-center" style="font-size:0pt; line-height:0pt; text-align:center"><a href="#" target="_blank"><img src="http://www.pikbuk.in/images/main_logo.1e6b15a1.png" border="0" width="103" height="87" alt="" /></a></div>
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  									</td>
  									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  								</tr>
  							</table>
  							<!-- END Header -->

  							<!-- Main -->
  							<table width="100%" border="0" cellspacing="0" cellpadding="0">
  								<tr>
  									<td>
  										<!-- Head -->
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#577f91">
  											<tr>
  												<td>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>

  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" height="3" bgcolor="#ffffff">&nbsp;</td>
  																	</tr>
  																</table>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="24" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="3" bgcolor="#ffffff"></td>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="10"></td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																<div class="h2" style="color:#ffffff; font-family:Georgia, serif; min-width:auto !important; font-size:60px; line-height:64px; text-align:center">
  																	<em><img src="http://bardecode.com/images/code128_eg.jpg"/></em>
  																</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="h3-2-center" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:20px; line-height:26px; text-align:center; letter-spacing:5px">Mobile Number-` + configs.orderSeedData.address.phone + `</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="35" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="10"></td>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="3" bgcolor="#ffffff"></td>
  														</tr>
  													</table>
  												</td>
  											</tr>
  										</table>
  										<!-- END Head -->

  										<!-- Body -->
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
  											<tr>
  												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  												<td>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="35" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  													<div class="h3-1-center" style="color:#1e1e1e; font-family:Georgia, serif; min-width:auto !important; font-size:20px; line-height:26px; text-align:center">Item in order with order id <strong>` + configs.orderSeedData.serviceNumber + `</strong> has been delivered!Hope you liked our service. We would love to get your feedback.</div>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="20" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  													<!-- Button -->
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td align="center">
  																<table width="210" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td align="center" bgcolor="#577f91">
  																			<table border="0" cellspacing="0" cellpadding="0">
  																				<tr>
  																					<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="15"><table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="50" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table></td>
  																					<td bgcolor="#577f91">
  																						<div class="text-btn" style="color:#ffffff; font-family:Arial, sans-serif; min-width:auto !important; font-size:16px; line-height:20px; text-align:center">
  																							<a href="http://www.dtdc.in/tracking/tracking_results.asp" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none"><span class="link-white" style="color:#ffffff; text-decoration:none">TRACK YOUR ORDER</span></a>
  																						</div>
  																						<div class="text-btn" style="color:#ffffff; font-family:Arial, sans-serif; min-width:auto !important; font-size:16px; line-height:20px; text-align:center">
  																							<a href="http://www.dtdc.in/tracking/tracking_results.asp" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none"><span class="link-white" style="color:#ffffff; text-decoration:none">AWB-` + configs.orderSeedData.trackerNumber +  `</span></a>
  																						</div>
  																					</td>
  																					<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="15"></td>
  																				</tr>
  																			</table>
  																		</td>
  																	</tr>
  																</table>
  															</td>
  														</tr>
  													</table>
  													<!-- END Button -->
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="40" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top; Margin:0" valign="top" width="270">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																						<div class="text-1" style="color:#577f91; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>SHIPPING ADDRESS:</strong>
  																						</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fafafa">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																						<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>` + configs.orderSeedData.address.name + `</strong>
  																							<br/>` +
  																							configs.orderSeedData.address.line1 + ` ` + configs.orderSeedData.address.line2 +
  																							`<br>` +
                                                configs.orderSeedData.address.city + ` ` + configs.orderSeedData.address.state +
  																							`<br>
                                                Pincode-` + configs.orderSeedData.address.pinCode +
  																							`<br>
                                                Mobile-` + configs.orderSeedData.address.phone +

  																						`</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																		</td>
  																	</tr>
  																</table>
  															</th>
  															<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top; Margin:0" valign="top" width="20">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td><div style="font-size:0pt; line-height:0pt;" class="mobile-br-15"></div></td>
  																	</tr>
  																</table>
  															</th>
  															<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top; Margin:0" valign="top" width="270">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																						<div class="text-1" style="color:#577f91; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>Order.No:</strong> <span style="color: #1e1e1e;">` + configs.orderSeedData.serviceNumber + `</span>
  																						</div>
  																						<div class="text-1" style="color:#577f91; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>Order On:</strong> <span style="color: #1e1e1e;">` + configs.orderSeedData.orderedOn + `</span>
  																						</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="20" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																						<div class="text-1" style="color:#577f91; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>Expected Delivery Date:</strong>
  																						</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fafafa">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																						<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">` +
  																							 configs.orderSeedData.estimatedDate +
  																						`</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																		</td>
  																	</tr>
  																</table>
  															</th>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="40" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  															<td style="border-bottom: 1px solid #f4f4f4;" width="225">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>Item</strong></div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  															<td style="border-bottom: 1px solid #f4f4f4;">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>Qty</strong></div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  															<td style="border-bottom: 1px solid #f4f4f4;" width="60">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="text-center" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:center"><strong>Total</strong></div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  															</td>
  															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  														</tr>
  														<tr>
  															<td>&nbsp;</td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">` + configs.orderSeedData.productName + `</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  															</td>
  															<td>&nbsp;</td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">priceDetails.quantity}}</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  															</td>
  															<td>&nbsp;</td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																<div class="text-center" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:center">RS.{{priceDetails.singleUnitAmount}}</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  															</td>
  															<td>&nbsp;</td>
  														</tr>

  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>


  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" height="1" bgcolor="#d2973b">&nbsp;</td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>


  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td align="right">
  																<table border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">Subtotal:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																		<td width="50">
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs.{{priceDetails.subtotalAmount}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																	</tr>

  																		<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">GiftBox Prices:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs.{{priceDetails.giftPackAmount}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>

  																		<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">Discount:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs.{{priceDetails.discount}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>

  																		<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">Shipping:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs.{{priceDetails.shipmentAmount}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>

  																	<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">GST 12%:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs{{priceDetails.grantAmount*10.7/100}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>
  																	<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right"><strong>TOTAL:</strong></div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>Rs{{priceDetails.grantAmount}}</strong></div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>
  																</table>
  															</td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="35" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  												</td>
  												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  											</tr>
  										</table>
  										<!-- END Body -->

  										<!-- Foot -->
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#577f91">
  											<tr>
  												<td>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="3" bgcolor="#ffffff"></td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																<div class="h3-1-center" style="color:#ffffff; font-family:Georgia, serif; min-width:auto !important; font-size:20px; line-height:26px; text-align:center">
  																	<em>Follow Us</em>
  																</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>


  																<!-- Socials -->
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td align="center">
  																			<table border="0" cellspacing="0" cellpadding="0">
  																				<tr>
  																					<td class="img-center" style="font-size:0pt; line-height:0pt; text-align:center" width="38"><a href="https://www.facebook.com/PikBukIndia/" target="_blank"><img src="https://d1pgqke3goo8l6.cloudfront.net/PZeWpIm2TkSqtS6i07xE_ico_facebook.jpg" border="0" width="28" height="28" alt="" /></a></td>
  																					<td class="img-center" style="font-size:0pt; line-height:0pt; text-align:center" width="38"><a href="https://twitter.com/pikbuk" target="_blank"><img src="https://d1pgqke3goo8l6.cloudfront.net/hAIPhWl2SB2cL0Atc4lB_ico_twitter.jpg" border="0" width="28" height="28" alt="" /></a></td>
  																					<td class="img-center" style="font-size:0pt; line-height:0pt; text-align:center" width="38"><a href="https://www.instagram.com/instapikbukmemories/" target="_blank"><img src="https://d1pgqke3goo8l6.cloudfront.net/NrXUpqcRQwKnJKzLkqS1_ico_instagram.jpg" border="0" width="28" height="28" alt="" /></a></td>
  																					<td class="img-center" style="font-size:0pt; line-height:0pt; text-align:center" width="38"><a href="https://in.pinterest.com/pikbuk/" target="_blank"><img src="https://d1pgqke3goo8l6.cloudfront.net/VaewiS8gT5ClCCR9vAO1_ico_pinterest.jpg" border="0" width="28" height="28" alt="" /></a></td>
  																				</tr>
  																			</table>
  																		</td>
  																	</tr>
  																</table>
  																<!-- END Socials -->
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  															</td>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="3" bgcolor="#ffffff"></td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>

  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="24" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" height="3" bgcolor="#ffffff">&nbsp;</td>
  																	</tr>
  																</table>
  															</td>

  														</tr>
  													</table>
  												</td>
  											</tr>
  										</table>
  										<!-- END Foot -->
  									</td>
  								</tr>
  							</table>
  							<!-- END Main -->

  							<!-- Footer -->
  							<table width="100%" border="0" cellspacing="0" cellpadding="0">
  								<tr>
  									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  									<td>
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  										<div class="text-footer" style="color:#666666; font-family:Arial, sans-serif; min-width:auto !important; font-size:12px; line-height:18px; text-align:center">

  											<br />
  											<a href="http://pikbuk.in/" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none">Pikbuk Technology</span></a>
  											<span class="mobile-block"><span class="hide-for-mobile">|</span></span>
  											<a href="mailto:email@yoursitename.com" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none">admin@pikbuk.in</span></a>
  											<span class="mobile-block"><span class="hide-for-mobile">|</span></span>
  											Phone: <a href="tel:+1655606605" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none">085273 06537(Mon-Fri 10Am to 6 Pm)</span></a>
  										</div>
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  									</td>
  									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  								</tr>
  							</table>
  							<!-- END Footer -->
  						</td>
  					</tr>
  				</table>
  				<div class="wgmail" style="font-size:0pt; line-height:0pt; text-align:center"><img src="https://d1pgqke3goo8l6.cloudfront.net/oD2XPM6QQiajFKLdePkw_gmail_fix.gif" width="600" height="1" style="min-width:600px" alt="" border="0" /></div>
  			</td>
  		</tr>
  	</table>
  </body>
  </html>`;
  next(null, adminEmailTemplate);
}

module.exports.generateInvoicePdf = function(req, res, next) {
  var adminInvoicePdf = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Admin Invoice </title>
    </head>
    <body>
      <div style="margin:2% 2% 0% 0%;float:left; width:500px; box-shadow:0 0 3px #aaa; height:auto;color:#353232;">
        <hr style="border-top:2px dotted #000000; height:1px;">
        <b>&nbsp;&nbsp;&nbsp;Tax Invoice &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Prepaid (No Amount Due)</b>
          <hr>
          <span style="font-size:14px;float:left;  padding:10px; text-align:right;">
            <img src="http://bardecode.com/images/code128_eg.jpg" style="height:80px; width:300px;">
          </span>
          <br>
          <div style="width:100%; padding:0px 0px;border-bottom:1px solid rgba(0,0,0,0.2);float:left;">
            <div style="width:60%; float:left;padding:8px;">
             <span style="font-size:25px;float:left; width:100%;">
               <b>DELIVERY ADDRESS :</b>
             </span><br><br>
             <span style="font-size:25px; fontcolor:#000000; float:left;width:100%;">
               <b>{{address.name}} </b><br>
               <b>{{address.line1}},</b><br>
               <b>{{landmark}},</b><br>
               <b>{{address.line2}},</b><br>
               <b>{{address.city}},{{address.state}}</b>
             </span>
             <span style="font-size:20px; fontcolor:#000000; float:left;width:100%;">
               <b>Pincode:-{{address.pinCode}}</b>
             </span>
             <span style="font-size:22px;fontcolor:#000000; float:left;width:100%;">
               <b>Mobile No:-{{address.phone}}</b>
             </span>
             <br>
          </div>
          <div style="width:30%; float:left;padding:8px;">
            <span style="font-size:15px;fontcolor:black; font-weight:normal;float:left;padding:1px ;width:100%;color:#353232;text-align:right;">
              Ordered Through <br>
              <img src="http://www.pikbuk.in/images/main_logo.1e6b15a1.png" style="height:50px; width:80px;">
            </span>
          </div>
          <!-- <div style="width:40%; float:right;padding:">
          <span style="font-size:14px;float:right;  padding:10px; text-align:right;">
          <img src="http://bardecode.com/images/code128_eg.jpg" style="height:80px; width:230px;">
          </span>
          </div>-->
        </div>
        <div style="width:100%; padding:0px; float:left;">
          <div style="width:100%;float:left;background:#efefef;">
            <span style="font-size:20px;fontcolor:#000000; float:left; text-align:left;padding:1px;width:90%;color:#353232;font-weight:100;">
              &nbsp; <b>Courier Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : DTDC Express Limited</b>
              <br>
              &nbsp;&nbsp;<b>Courier AWB No. : {{trackerNumber}}</b>
              <br>
              &nbsp;&nbsp;<b>Order ID </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :<b> {{serviceNumber}}</b>
            </span>
            <span style="font-size:20px; fontcolor:black; font-weight:100;float:left;padding:1px ;width:40%;color:#353232; text-align:right;">
            </span>
          </div>
          <div style="width:100%;float:left;">
            <span style="font-size:15px;fontcolor:black; float:left; text-align:left;padding:7px;width:30%;color:#353232;">
              &nbsp;<b> Pikbuk Technologies</b>
              <span style="font-size:10px; float:left; width:100%;">
              </span>
            </span>
            <span style="font-size:15px; fontcolor:black; font-weight:normal;float:left;padding:7px ;width:50%;color:#353232;text-align:right;">
              <b>GSTIN NO.</b> 07AALPJ4731A1Z3
              <br>
              <b>PAN</b> : AALPJ4731A
            </span>
          </div>
          <hr style="border-top:2px dotted #000000; height:1px;">
        <!--First Col-->
         <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 100%;">
           <tr>
             <th style="font-size:15px; fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Item</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;&nbsp;{{productName}}, HSN 9989</th>
           </tr>
           <tr>
             <th style=" font-size:15px; fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Qty</th>
             <th style=" font-size:15px; fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;{{priceDetails.quantity}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Prices</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.singleUnitAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Gross Total</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.subtotalAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Gift Box</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.giftPackAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Discount</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.shipmentAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Shipping</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.taxAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;GST @12%</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{priceDetails.grantAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Total</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.grantAmount}}</th>
           </tr>
         </table>
         <hr>
         <!--End First Col-->
         <!--Second Col-->
         <div style="width:100%;float:left;">
           <span style="font-size:20px;fontcolor:black; float:left; text-align:left;padding:1px;width:100%;color:#353232;">
             <b>Order Date </b>: {{orderedOn}}
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           </span>
          </div>
          <hr>
          <!--End Second Col-->
          <!--Fourth Start-->
         <div style="width:100%;float:left;">
           <span style="font-size:15px;fontcolor:black; float:left; text-align:left;padding:2px;width:40%;color:#353232;">
             &nbsp;<b>Sender Address</b><br>
             &nbsp;M/s Pikbuk Technologies<br>
             &nbsp;A-21, Second Floor<br>
             &nbsp;Green Park Main<br>
             &nbsp;New Delhi-110016
           </span>
         </div>
         <br>
         <br> <br><br>
         <p style=" font-size:15px; fontcolor:black;">&nbsp;&nbsp;<b> Declaration</b>
           The goods sold are intended for end user consumption and not for resale<br><br>
           &nbsp;&nbsp;&nbsp;E. & O.E.</p>
           <!--End Fourth End-->
         </div>
       </div>
     </body>
   </html>`;

   let options = { format: 'Tabloid' };
   pdf.create(adminInvoicePdf, options).toFile('public/uploads/' + configs.orderSeedData.orderNo + '_invoice.pdf', function(err, res) {
     if (err)  return console.log(err);
     console.log(res); // { filename: '/app/businesscard.pdf' }
   });
   next();
}

module.exports.generateUserEmailBody = function(req, body, next) {
  var userEmailTemplate = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml"
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  	<title>Email Template</title>
  </head>
  <body class="body" style="padding:0 !important; margin:0 !important; display:block !important; background:#eeeee; -webkit-text-size-adjust:none">
  	<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#EEEEEE">
  		<tr>
  			<td align="center" valign="top">
  				<!-- Top -->
  				<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#161616">
  					<tr>
  						<td align="center" valign="top">
  							<table width="600" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
  								<tr>
  									<td class="td" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; width:600px; min-width:600px; Margin:0" width="600">
  										<table width="100%" border="0" cellspacing="0" cellpadding="0">
  											<tr>
  												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  												<td>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td>
  																<div class="text-header" style="color:#666666; font-family:Arial, sans-serif; min-width:auto !important; font-size:12px; line-height:16px; text-align:left">
  																	<a href="#" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none"><img src="https://d1pgqke3goo8l6.cloudfront.net/ZBZBRNHoQoCRD4F8SSN0_ico_webversion.jpg" border="0" width="14" height="16" alt="" style="vertical-align: middle;" />&nbsp; Web Version</span></a>
  																</div>
  															</td>
  															<td>
  																<div class="text-header-1" style="color:#666666; font-family:Arial, sans-serif; min-width:auto !important; font-size:12px; line-height:16px; text-align:right">
  																	<a href="#" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none"><img src="https://d1pgqke3goo8l6.cloudfront.net/PyQZkzxDTBOmTLdM4C3S_ico_forward.jpg" border="0" width="14" height="16" alt="" style="vertical-align: middle;" />&nbsp; Forward</span></a>
  																</div>
  															</td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  												</td>
  												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  											</tr>
  										</table>
  									</td>
  								</tr>
  							</table>
  						</td>
  					</tr>
  				</table>
  				<!-- END Top -->
  				<table width="600" border="0" cellspacing="0" cellpadding="0" class="mobile-shell">
  					<tr>
  						<td class="td" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; width:600px; min-width:600px; Margin:0" width="600">
  							<!-- Header -->
  							<table width="100%" border="0" cellspacing="0" cellpadding="0">
  								<tr>
  									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  									<td>
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  										<div class="img-center" style="font-size:0pt; line-height:0pt; text-align:center"><a href="#" target="_blank"><img src="http://www.pikbuk.in/images/main_logo.1e6b15a1.png" border="0" width="103" height="87" alt="" /></a></div>
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  									</td>
  									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  								</tr>
  							</table>
  							<!-- END Header -->
  							<!-- Main -->
  							<table width="100%" border="0" cellspacing="0" cellpadding="0">
  								<tr>
  									<td>
  										<!-- Head -->
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#577f91">
  											<tr>
  												<td>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>

  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" height="3" bgcolor="#ffffff">&nbsp;</td>
  																	</tr>
  																</table>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="24" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="3" bgcolor="#ffffff"></td>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="10"></td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="h2" style="color:#ffffff; font-family:Georgia, serif; min-width:auto !important; font-size:60px; line-height:64px; text-align:center">
  																	<em>Thank you</em>
  																</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="h3-2-center" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:20px; line-height:26px; text-align:center; letter-spacing:5px">FOR YOUR ORDER!</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="35" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="10"></td>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="3" bgcolor="#ffffff"></td>
  														</tr>
  													</table>
  												</td>
  											</tr>
  										</table>
  										<!-- END Head -->
  										<!-- Body -->
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
  											<tr>
  												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  												<td>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="35" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  													<div class="h3-1-center" style="color:#1e1e1e; font-family:Georgia, serif; min-width:auto !important; font-size:20px; line-height:26px; text-align:center">Thanks for using PikBuk! Your order has been confirmed and will be delivered at your address in next 7 days.</div>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="20" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  													<!-- Button -->
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td align="center">
  																<table width="210" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td align="center" bgcolor="#577f91">
  																			<table border="0" cellspacing="0" cellpadding="0">
  																				<tr>
  																					<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="15"><table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="50" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
                                            </td>
  																					<td bgcolor="#577f91">
  																						<div class="text-btn" style="color:#ffffff; font-family:Arial, sans-serif; min-width:auto !important; font-size:16px; line-height:20px; text-align:center">
  																							<a href="http://www.dtdc.in/tracking/tracking_results.asp" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none"><span class="link-white" style="color:#ffffff; text-decoration:none">TRACK YOUR ORDER</span></a>
  																						</div>
  																						<div class="text-btn" style="color:#ffffff; font-family:Arial, sans-serif; min-width:auto !important; font-size:16px; line-height:20px; text-align:center">
  																							<a href="http://www.dtdc.in/tracking/tracking_results.asp" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none"><span class="link-white" style="color:#ffffff; text-decoration:none">AWB-{{trackerNumber}}</span></a>
  																						</div>
  																					</td>
  																					<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="15"></td>
  																				</tr>
  																			</table>
  																		</td>
  																	</tr>
  																</table>
  															</td>
  														</tr>
  													</table>
  													<!-- END Button -->
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="40" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top; Margin:0" valign="top" width="270">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																						<div class="text-1" style="color:#577f91; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>SHIPPING ADDRESS:</strong>
  																						</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fafafa">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																						<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>{{address.name}}</strong>
  																							<br />
  																							{{address.line1}} {{address.line2}}
  																							<br>
                                                                                              {{address.city}} {{address.state}}
  																							<br>
                                                                                              Pincode-{{address.pinCode}}
  																							<br>
                                                                                              Mobile-{{address.phone}}

  																						</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																		</td>
  																	</tr>
  																</table>
  															</th>
  															<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top; Margin:0" valign="top" width="20">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td><div style="font-size:0pt; line-height:0pt;" class="mobile-br-15"></div>
                                      </td>
  																	</tr>
  																</table>
  															</th>
  															<th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top; Margin:0" valign="top" width="270">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>

  																						<div class="text-1" style="color:#577f91; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>Order.No:</strong> <span style="color: #1e1e1e;">{{serviceNumber}}</span>
  																						</div>
  																						<div class="text-1" style="color:#577f91; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>Order On:</strong> <span style="color: #1e1e1e;">{{orderedOn}}</span>
  																						</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="20" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f4f4f4">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																						<div class="text-1" style="color:#577f91; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							<strong>Expected Delivery Date:</strong>
  																						</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fafafa">
  																				<tr>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																					<td>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																						<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">
  																							 {{estimatedDate}}
  																						</div>
  																						<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																					</td>
  																					<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																				</tr>
  																			</table>
  																		</td>
  																	</tr>
  																</table>
  															</th>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="40" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  															<td style="border-bottom: 1px solid #f4f4f4;" width="225">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>Item</strong></div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  															<td style="border-bottom: 1px solid #f4f4f4;">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>Qty</strong></div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  															<td style="border-bottom: 1px solid #f4f4f4;" width="60">
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="text-center" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:center"><strong>Total</strong></div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td style="border-bottom: 1px solid #f4f4f4;" class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  														</tr>
  														<tr>
  															<td>&nbsp;</td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">{{productName}}</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td>&nbsp;</td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">{{priceDetails.quantity}}</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td>&nbsp;</td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="text-center" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:center">RS.{{priceDetails.singleUnitAmount}}</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="8" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td>&nbsp;</td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="10" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" height="1" bgcolor="#d2973b">&nbsp;</td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td align="right">
  																<table border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">Subtotal:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																		<td width="50">
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs.{{priceDetails.subtotalAmount}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  																	</tr>
  																		<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">GiftBox Prices:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs.{{priceDetails.giftPackAmount}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>
  																		<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">Discount:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs.{{priceDetails.discount}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>
  																		<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">Shipping:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs.{{priceDetails.shipmentAmount}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>
  																	<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right">GST 12%:</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left">Rs{{priceDetails.grantAmount*10.7/100}}</div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>
  																	<tr>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text-right" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:right"><strong>TOTAL:</strong></div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																		<td>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																			<div class="text" style="color:#1e1e1e; font-family:Arial, sans-serif; min-width:auto !important; font-size:14px; line-height:20px; text-align:left"><strong>Rs{{priceDetails.grantAmount}}</strong></div>
  																			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="3" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																		</td>
  																		<td>&nbsp;</td>
  																	</tr>
  																</table>
  															</td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="35" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  												</td>
  												<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  											</tr>
  										</table>
  										<!-- END Body -->
  										<!-- Foot -->
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#577f91">
  											<tr>
  												<td>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="3" bgcolor="#ffffff"></td>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<div class="h3-1-center" style="color:#ffffff; font-family:Georgia, serif; min-width:auto !important; font-size:20px; line-height:26px; text-align:center">
  																	<em>Follow Us</em>
  																</div>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<!-- Socials -->
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td align="center">
  																			<table border="0" cellspacing="0" cellpadding="0">
  																				<tr>
  																					<td class="img-center" style="font-size:0pt; line-height:0pt; text-align:center" width="38"><a href="https://www.facebook.com/PikBukIndia/" target="_blank"><img src="https://d1pgqke3goo8l6.cloudfront.net/PZeWpIm2TkSqtS6i07xE_ico_facebook.jpg" border="0" width="28" height="28" alt="" /></a></td>
  																					<td class="img-center" style="font-size:0pt; line-height:0pt; text-align:center" width="38"><a href="https://twitter.com/pikbuk" target="_blank"><img src="https://d1pgqke3goo8l6.cloudfront.net/hAIPhWl2SB2cL0Atc4lB_ico_twitter.jpg" border="0" width="28" height="28" alt="" /></a></td>
  																					<td class="img-center" style="font-size:0pt; line-height:0pt; text-align:center" width="38"><a href="https://www.instagram.com/instapikbukmemories/" target="_blank"><img src="https://d1pgqke3goo8l6.cloudfront.net/NrXUpqcRQwKnJKzLkqS1_ico_instagram.jpg" border="0" width="28" height="28" alt="" /></a></td>
  																					<td class="img-center" style="font-size:0pt; line-height:0pt; text-align:center" width="38"><a href="https://in.pinterest.com/pikbuk/" target="_blank"><img src="https://d1pgqke3goo8l6.cloudfront.net/VaewiS8gT5ClCCR9vAO1_ico_pinterest.jpg" border="0" width="28" height="28" alt="" /></a></td>
  																				</tr>
  																			</table>
  																		</td>
  																	</tr>
  																</table>
  																<!-- END Socials -->
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="15" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  															</td>
  															<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="3" bgcolor="#ffffff"></td>
  														</tr>
  													</table>
  													<table width="100%" border="0" cellspacing="0" cellpadding="0">
  														<tr>
  															<td>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="24" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  																<table width="100%" border="0" cellspacing="0" cellpadding="0">
  																	<tr>
  																		<td class="img" style="font-size:0pt; line-height:0pt; text-align:left" height="3" bgcolor="#ffffff">&nbsp;</td>
  																	</tr>
  																</table>
  															</td>
  														</tr>
  													</table>
  												</td>
  											</tr>
  										</table>
  										<!-- END Foot -->
  									</td>
  								</tr>
  							</table>
  							<!-- END Main -->
  							<!-- Footer -->
  							<table width="100%" border="0" cellspacing="0" cellpadding="0">
  								<tr>
  									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  									<td>
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  										<div class="text-footer" style="color:#666666; font-family:Arial, sans-serif; min-width:auto !important; font-size:12px; line-height:18px; text-align:center">
  											<br />
  											<a href="http://pikbuk.in/" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none">Pikbuk Technology</span></a>
  											<span class="mobile-block"><span class="hide-for-mobile">|</span></span>
  											<a href="mailto:email@yoursitename.com" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none">admin@pikbuk.in</span></a>
  											<span class="mobile-block"><span class="hide-for-mobile">|</span></span>
  											Phone: <a href="tel:+1655606605" target="_blank" class="link-1" style="color:#666666; text-decoration:none"><span class="link-1" style="color:#666666; text-decoration:none">085273 06537(Mon-Fri 10Am to 6 Pm)</span></a>
  										</div>
  										<table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%"><tr><td height="30" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td></tr></table>
  									</td>
  									<td class="content-spacing" style="font-size:0pt; line-height:0pt; text-align:left" width="20"></td>
  								</tr>
  							</table>
  							<!-- END Footer -->
  						</td>
  					</tr>
  				</table>
  				<div class="wgmail" style="font-size:0pt; line-height:0pt; text-align:center"><img src="https://d1pgqke3goo8l6.cloudfront.net/oD2XPM6QQiajFKLdePkw_gmail_fix.gif" width="600" height="1" style="min-width:600px" alt="" border="0" /></div>
  			</td>
  		</tr>
  	</table>
  </body>
  </html>`;
  next(null, userEmailTemplate);
}
