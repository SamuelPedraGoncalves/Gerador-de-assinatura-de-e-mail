function gerarAssinatura() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const cargo = document.getElementById('cargo').value;
    const email = document.getElementById('email').value;

    const assinaturaHTML = `
    <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
    <tbody>
        <tr>
            <td width="150" style="vertical-align: middle;"><span
                    class="template3__ImageContainer-sc-vj949k-0 jeScQV"
                    style="margin-right: 20px; display: block;"><img
                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/24b2ef4a00c6030385167cd550b7f63b/showFile/?&token=0duv431qifc2"
                        role="presentation" width="130" class="image__StyledImage-sc-hupvqm-0 gYgOut"
                        style="max-width: 130px;"></span></td>
            <td style="vertical-align: middle;">
                <h2 color="#373636" class="name__NameContainer-sc-1m457h3-0 jxbGUj"
                    style="margin: 0px; font-size: 20px; color: #757575; font-weight: 600;">
                    <span>${nome}</span><span>&nbsp;</span><span>${sobrenome}</span>
                </h2>
                <p color="#373636" font-size="large" class="job-title__Container-sc-1hmtp73-0 ifJNJc"
                    style="margin: 0px; color: #757575; font-size: 16px; line-height: 24px;">
                    <span>${cargo}</span><span>&nbsp;&nbsp;</span><span></span>
                </p>
                <p color="#373636" font-size="large"
                    class="company-details__CompanyContainer-sc-j5pyy8-0 VnOLK"
                    style="margin: 0px; font-weight: 500; color: #757575; font-size: 16px; line-height: 24px;">
                    <strong>Projacseg Corretora</strong>
                </p>

            </td>
            <td width="30">
                <div style="width: 30px;"></div>
            </td>
            <td color="#3f68c3" direction="vertical" width="1" height="auto"
                class="color-divider__Divider-sc-1h38qjv-0 llIisW"
                style="width: 1px; border-bottom: none; border-left: 1px solid rgb(63, 104, 195);"></td>
            <td width="30">
                <div style="width: 30px;"></div>
            </td>
            <td style="vertical-align: middle;">
                <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
                    <tbody>
                        <tr height="25" style="vertical-align: middle;">
                            <td width="30" style="vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0"
                                    class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                                    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
                                    <tbody>
                                        <tr>
                                            <td style="vertical-align: bottom;"><span color="#3f68c3"
                                                    width="11"
                                                    class="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe"
                                                    style="display: inline-block;"><img
                                                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/704a5d13b6cf365b6ad0435254375a98/showFile/?&token=wy3xdknaelh6"
                                                        color="#3f68c3" alt="mobilePhone" width="15"
                                                        class="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri"
                                                        style="display: block; background-color: #fff;"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style="padding: 0px; color: rgb(55, 54, 54);"><a
                                    href="tel:(21) 2217-2700" color="#373636"
                                    class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                                    style="text-decoration: none; color: rgb(55, 54, 54); font-size: 12px;"><span>(21)
                                        2217-2700</span></a></td>
                        </tr>
                        <tr height="25" style="vertical-align: middle;">
                            <td width="30" style="vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0"
                                    class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                                    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
                                    <tbody>
                                        <tr>
                                            <td style="vertical-align: bottom;"><span color="#3f68c3"
                                                    width="11"
                                                    class="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe"
                                                    style="display: inline-block;"><img
                                                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/cec3e688fb9a44bf96efd0d008e940cf/showFile/?&token=c6qpq6lsngvl"
                                                        color="#3f68c3" alt="address" width="14"
                                                        class="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri"
                                                        style="display: block;"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style="padding: 0px;"><a
                                    href="https://api.whatsapp.com/send?phone=5521960150452"
                                    class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                                    style="text-decoration: none; color: rgb(55, 54, 54); font-size: 12px;"><span>WhatsApp</span></a>
                            </td>
                        </tr>
                        <tr height="25" style="vertical-align: middle;">
                            <td width="30" style="vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0"
                                    class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                                    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
                                    <tbody>
                                        <tr>
                                            <td style="vertical-align: bottom;"><span color="#3f68c3"
                                                    width="11"
                                                    class="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe"
                                                    style="display: inline-block;"><img
                                                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/b325f7ae84873422e61a1941d96397e4/showFile/?&token=svw4cap4qwb4"
                                                        color="#3f68c3" alt="emailAddress" width="13"
                                                        class="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri"
                                                        style="display: block; background-color: #fff;"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style="padding: 0px;"><a href="mailto:${email}"
                                    color="#373636"
                                    class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                                    style="text-decoration: none; color: rgb(55, 54, 54); font-size: 12px;"><span>${email}</span></a>
                            </td>
                        </tr>
                        <tr height="25" style="vertical-align: middle;">
                            <td width="30" style="vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0"
                                    class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                                    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
                                    <tbody>
                                        <tr>
                                            <td style="vertical-align: bottom;"><span color="#3f68c3"
                                                    width="11"
                                                    class="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe"
                                                    style="display: inline-block;"><img
                                                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/97e7f95b6c3d66757140f1fe7ffed81f/showFile/?&token=ps89usr3taym"
                                                        color="#3f68c3" alt="website" width="15"
                                                        class="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri"
                                                        style="display: block; background-color: #fff;"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style="padding: 0px;"><a href="//www.projacseg.com.br" color="#373636"
                                    class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                                    style="text-decoration: none; color: rgb(55, 54, 54); font-size: 12px;"><span>www.projacseg.com.br</span></a>
                            </td>
                        </tr>
                        <tr height="25" style="vertical-align: middle;">
                            <td width="30" style="vertical-align: middle;">
                                <table cellpadding="0" cellspacing="0"
                                    class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                                    style="vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
                                    <tbody>
                                        <tr>
                                            <td style="vertical-align: bottom;"><span color="#3f68c3"
                                                    width="11"
                                                    class="contact-info__IconWrapper-sc-mmkjr6-1 bglVXe"
                                                    style="display: inline-block;"><img
                                                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/bb5c2e13dd89862a1164ab9a362b58b9/showFile/?&token=skn8pt5ya29q"
                                                        color="#3f68c3" alt="address" width="15"
                                                        class="contact-info__ContactLabelIcon-sc-mmkjr6-0 cnkwri"
                                                        style="display: block; background-color: #fff;"></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style="padding: 0px;"><a
                                    href="https://www.google.com.br/maps/place/R.+Anfil%C3%B3fio+de+Carvalho,+29+-+Centro,+Rio+de+Janeiro+-+RJ,+20030-060/@-22.9081399,-43.1767235,17z/data=!3m1!4b1!4m6!3m5!1s0x9981dff955c6df:0xf1c4d90a0101887d!8m2!3d-22.9081449!4d-43.1741486!16s%2Fg%2F11b8v80_3f?entry=ttu"
                                    color="#373636"
                                    class="contact-info__ExternalLink-sc-mmkjr6-2 ibLXSU"
                                    style="text-decoration: none; color: rgb(55, 54, 54); font-size: 12px;"><span>Rua
                                        Anfilófio
                                        de Carvalho N° 29 Sala 1216 - Centro, RJ - 20030-060.</span></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</td>
</tr>
<tr>
<td>
<table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
    style="width: 100%; vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
    <tbody>
        <tr>
            <td height="30"></td>
        </tr>
        <tr>
            <td color="#3f68c3" direction="horizontal" width="auto" height="1"
                class="color-divider__Divider-sc-1h38qjv-0 llIisW"
                style="width: 100%; border-bottom: 1px solid rgb(63, 104, 195); border-left: none; display: block;">
            </td>
        </tr>
        <tr>
            <td height="30"></td>
        </tr>
    </tbody>
</table>
</td>
</tr>
<tr>
<td>
<table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
    style="width: 100%; vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
    <tbody>
        <tr>
            <td style="text-align: right; vertical-align: top;">
                <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 kAbRZI"
                    style="display: inline-block; vertical-align: -webkit-baseline-middle; font-size: large; font-family: Verdana;">
                    <tbody>
                        <tr style="text-align: right;">
                            <td><a href="https://web.facebook.com/projacseg/?_rdc=1&amp;_rdr"
                                    color="#2880db" class="social-links__LinkAnchor-sc-py8uhj-2 hBVWAh"
                                    style="display: inline-block; padding: 0px;"><img
                                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/35f4c3e7a2196ce7ee65c4da15f19821/showFile/?&token=ahm3e51uxvzz"
                                        alt="facebook" color="#2880db" height="30"
                                        class="social-links__LinkImage-sc-py8uhj-1 hSTSwA"
                                        style="background-color: #fff; max-width: 145px; display: block;"></a>
                            </td>
                            <td width="5">
                                <div></div>
                            </td>
                            <td><a href="https://br.linkedin.com/company/projacseg-administradora-e-corretora-de-seguros"
                                    color="#2880db" class="social-links__LinkAnchor-sc-py8uhj-2 hBVWAh"
                                    style="display: inline-block; padding: 0px;"><img
                                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/198221effc7707831d263af1e74ebe36/showFile/?&token=o4mzvzfhzb7f"
                                        alt="linkedin" color="#2880db" height="27"
                                        class="social-links__LinkImage-sc-py8uhj-1 hSTSwA"
                                        style="background-color: #fff; max-width: 145px; display: block;"></a>
                            </td>
                            <td width="5">
                                <div></div>
                            </td>
                            <td><a href="https://www.instagram.com/projacseg/" color="#2880db"
                                    class="social-links__LinkAnchor-sc-py8uhj-2 hBVWAh"
                                    style="display: inline-block; padding: 0px;"><img
                                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/24187a3e8919b0cc75161ecb6a73e984/showFile/?&token=xcsvzon1twvm"
                                        alt="instagram" color="#2880db" height="29"
                                        class="social-links__LinkImage-sc-py8uhj-1 hSTSwA"
                                        style="background-color: #fff; max-width: 145px; display: block"></a>
                            </td>
                            <td width="5">
                            <td><a href="https://api.whatsapp.com/send?phone=5521960150452"
                                    color="#2880db" class="social-links__LinkAnchor-sc-py8uhj-2 hBVWAh"
                                    style="display: inline-block; padding: 0px;"><img
                                        src="https://bitrix24public.com/projacseg.bitrix24.com.br/docs/pub/cec3e688fb9a44bf96efd0d008e940cf/showFile/?&token=503xfuvpnkik"
                                        alt="whatsapp" height="31"
                                        class="social-links__LinkImage-sc-py8uhj-1 hSTSwA">
                            </td>
                            <td width="5">
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</td>
</tr>
</tbody>
</table>`;

    document.getElementById('signature-preview').innerHTML = assinaturaHTML;
}

function copiarAssinatura() {
    const assinaturaHTML = document.getElementById('signature-preview').innerHTML;
    const textArea = document.createElement('textarea');
    textArea.value = assinaturaHTML;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Código da assinatura copiado para a área de transferência!');
}






