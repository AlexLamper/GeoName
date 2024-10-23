
const allFlags = [
    '/flags/4x3/ad.svg', // Andorra
    '/flags/4x3/ae.svg', // United Arab Emirates
    '/flags/4x3/af.svg', // Afghanistan
    '/flags/4x3/ag.svg', // Antigua and Barbuda
    '/flags/4x3/ai.svg', // Anguilla
    '/flags/4x3/al.svg', // Albania
    '/flags/4x3/am.svg', // Armenia
    '/flags/4x3/ao.svg', // Angola
    '/flags/4x3/aq.svg', // Antarctica
    '/flags/4x3/ar.svg', // Argentina
    '/flags/4x3/as.svg', // American Samoa
    '/flags/4x3/at.svg', // Austria
    '/flags/4x3/au.svg', // Australia
    '/flags/4x3/aw.svg', // Aruba
    '/flags/4x3/ax.svg', // Åland Islands
    '/flags/4x3/az.svg', // Azerbaijan
    '/flags/4x3/ba.svg', // Bosnia and Herzegovina
    '/flags/4x3/bb.svg', // Barbados
    '/flags/4x3/bd.svg', // Bangladesh
    '/flags/4x3/be.svg', // Belgium
    '/flags/4x3/bf.svg', // Burkina Faso
    '/flags/4x3/bg.svg', // Bulgaria
    '/flags/4x3/bh.svg', // Bahrain
    '/flags/4x3/bi.svg', // Burundi
    '/flags/4x3/bj.svg', // Benin
    '/flags/4x3/bl.svg', // Saint Barthélemy
    '/flags/4x3/bm.svg', // Bermuda
    '/flags/4x3/bn.svg', // Brunei
    '/flags/4x3/bo.svg', // Bolivia
    '/flags/4x3/bq.svg', // Bonaire, Sint Eustatius and Saba
    '/flags/4x3/br.svg', // Brazil
    '/flags/4x3/bs.svg', // Bahamas
    '/flags/4x3/bt.svg', // Bhutan
    '/flags/4x3/bu.svg', // Bulgaria
    '/flags/4x3/bv.svg', // Bouvet Island
    '/flags/4x3/bw.svg', // Botswana
    '/flags/4x3/by.svg', // Belarus
    '/flags/4x3/bz.svg', // Belize
    '/flags/4x3/ca.svg', // Canada
    '/flags/4x3/cd.svg', // Democratic Republic of the Congo
    '/flags/4x3/cf.svg', // Central African Republic
    '/flags/4x3/cg.svg', // Republic of the Congo
    '/flags/4x3/ch.svg', // Switzerland
    '/flags/4x3/ci.svg', // Ivory Coast
    '/flags/4x3/ck.svg', // Cook Islands
    '/flags/4x3/cl.svg', // Chile
    '/flags/4x3/cm.svg', // Cameroon
    '/flags/4x3/cn.svg', // China
    '/flags/4x3/co.svg', // Colombia
    '/flags/4x3/cr.svg', // Costa Rica
    '/flags/4x3/cu.svg', // Cuba
    '/flags/4x3/cv.svg', // Cape Verde
    '/flags/4x3/cw.svg', // Curaçao
    '/flags/4x3/cx.svg', // Christmas Island
    '/flags/4x3/cy.svg', // Cyprus
    '/flags/4x3/cz.svg', // Czech Republic
    '/flags/4x3/de.svg', // Germany
    '/flags/4x3/dj.svg', // Djibouti
    '/flags/4x3/dk.svg', // Denmark
    '/flags/4x3/dm.svg', // Dominica
    '/flags/4x3/do.svg', // Dominican Republic
    '/flags/4x3/dz.svg', // Algeria
    '/flags/4x3/ee.svg', // Estonia
    '/flags/4x3/eg.svg', // Egypt
    '/flags/4x3/eh.svg', // Western Sahara
    '/flags/4x3/er.svg', // Eritrea
    '/flags/4x3/es.svg', // Spain
    '/flags/4x3/et.svg', // Ethiopia
    '/flags/4x3/eu.svg', // European Union
    '/flags/4x3/fi.svg', // Finland
    '/flags/4x3/fj.svg', // Fiji
    '/flags/4x3/fk.svg', // Falkland Islands
    '/flags/4x3/fm.svg', // Federated States of Micronesia
    '/flags/4x3/fo.svg', // Faroe Islands
    '/flags/4x3/fr.svg', // France
    '/flags/4x3/ga.svg', // Gabon
    '/flags/4x3/gb.svg', // United Kingdom
    '/flags/4x3/gd.svg', // Grenada
    '/flags/4x3/ge.svg', // Georgia
    '/flags/4x3/gf.svg', // French Guiana
    '/flags/4x3/gg.svg', // Guernsey
    '/flags/4x3/gh.svg', // Ghana
    '/flags/4x3/gi.svg', // Gibraltar
    '/flags/4x3/gl.svg', // Greenland
    '/flags/4x3/gm.svg', // Gambia
    '/flags/4x3/gn.svg', // Guinea
    '/flags/4x3/gp.svg', // Guadeloupe
    '/flags/4x3/gq.svg', // Equatorial Guinea
    '/flags/4x3/gr.svg', // Greece
    '/flags/4x3/gt.svg', // Guatemala
    '/flags/4x3/gu.svg', // Guam
    '/flags/4x3/gw.svg', // Guinea-Bissau
    '/flags/4x3/gx.svg', // Guyana
    '/flags/4x3/hk.svg', // Hong Kong
    '/flags/4x3/hm.svg', // Heard Island and McDonald Islands
    '/flags/4x3/hn.svg', // Honduras
    '/flags/4x3/hr.svg', // Croatia
    '/flags/4x3/ht.svg', // Haiti
    '/flags/4x3/hu.svg', // Hungary
    '/flags/4x3/id.svg', // Indonesia
    '/flags/4x3/ie.svg', // Ireland
    '/flags/4x3/il.svg', // Israel
    '/flags/4x3/im.svg', // Isle of Man
    '/flags/4x3/in.svg', // India
    '/flags/4x3/io.svg', // British Indian Ocean Territory
    '/flags/4x3/iq.svg', // Iraq
    '/flags/4x3/ir.svg', // Iran
    '/flags/4x3/is.svg', // Iceland
    '/flags/4x3/it.svg', // Italy
    '/flags/4x3/je.svg', // Jersey
    '/flags/4x3/jm.svg', // Jamaica
    '/flags/4x3/jo.svg', // Jordan
    '/flags/4x3/jp.svg', // Japan
    '/flags/4x3/ke.svg', // Kenya
    '/flags/4x3/kg.svg', // Kyrgyzstan
    '/flags/4x3/kh.svg', // Cambodia
    '/flags/4x3/ki.svg', // Kiribati
    '/flags/4x3/km.svg', // Comoros
    '/flags/4x3/kn.svg', // Saint Kitts and Nevis
    '/flags/4x3/kp.svg', // North Korea
    '/flags/4x3/kr.svg', // South Korea
    '/flags/4x3/kw.svg', // Kuwait
    '/flags/4x3/kz.svg', // Kazakhstan
    '/flags/4x3/la.svg', // Laos
    '/flags/4x3/lb.svg', // Lebanon
    '/flags/4x3/lc.svg', // Saint Lucia
    '/flags/4x3/li.svg', // Liechtenstein
    '/flags/4x3/lk.svg', // Sri Lanka
    '/flags/4x3/lr.svg', // Liberia
    '/flags/4x3/ls.svg', // Lesotho
    '/flags/4x3/lt.svg', // Lithuania
    '/flags/4x3/lu.svg', // Luxembourg
    '/flags/4x3/lv.svg', // Latvia
    '/flags/4x3/ly.svg', // Libya
    '/flags/4x3/ma.svg', // Morocco
    '/flags/4x3/md.svg', // Moldova
    '/flags/4x3/me.svg', // Montenegro
    '/flags/4x3/mf.svg', // Saint Martin
    '/flags/4x3/mg.svg', // Madagascar
    '/flags/4x3/mh.svg', // Marshall Islands
    '/flags/4x3/mk.svg', // North Macedonia
    '/flags/4x3/ml.svg', // Mali
    '/flags/4x3/mm.svg', // Myanmar
    '/flags/4x3/mn.svg', // Mongolia
    '/flags/4x3/mo.svg', // Macao
    '/flags/4x3/mp.svg', // Northern Mariana Islands
    '/flags/4x3/mq.svg', // Martinique
    '/flags/4x3/mr.svg', // Mauritania
    '/flags/4x3/ms.svg', // Montserrat
    '/flags/4x3/mt.svg', // Malta
    '/flags/4x3/mu.svg', // Mauritius
    '/flags/4x3/mv.svg', // Maldives
    '/flags/4x3/mw.svg', // Malawi
    '/flags/4x3/mx.svg', // Mexico
    '/flags/4x3/my.svg', // Malaysia
    '/flags/4x3/mz.svg', // Mozambique
    '/flags/4x3/na.svg', // Namibia
    '/flags/4x3/nc.svg', // New Caledonia
    '/flags/4x3/ne.svg', // Niger
    '/flags/4x3/nf.svg', // Norfolk Island
    '/flags/4x3/ng.svg', // Nigeria
    '/flags/4x3/ni.svg', // Nicaragua
    '/flags/4x3/nl.svg', // Netherlands
    '/flags/4x3/no.svg', // Norway
    '/flags/4x3/np.svg', // Nepal
    '/flags/4x3/nr.svg', // Nauru
    '/flags/4x3/nu.svg', // Niue
    '/flags/4x3/nz.svg', // New Zealand
    '/flags/4x3/om.svg', // Oman
    '/flags/4x3/pa.svg', // Panama
    '/flags/4x3/pf.svg', // French Polynesia
    '/flags/4x3/pg.svg', // Papua New Guinea
    '/flags/4x3/ph.svg', // Philippines
    '/flags/4x3/pk.svg', // Pakistan
    '/flags/4x3/pl.svg', // Poland
    '/flags/4x3/pm.svg', // Saint Pierre and Miquelon
    '/flags/4x3/pn.svg', // Pitcairn Islands
    '/flags/4x3/pr.svg', // Puerto Rico
    '/flags/4x3/pt.svg', // Portugal
    '/flags/4x3/py.svg', // Paraguay
    '/flags/4x3/qa.svg', // Qatar
    '/flags/4x3/re.svg', // Réunion
    '/flags/4x3/ro.svg', // Romania
    '/flags/4x3/rs.svg', // Serbia
    '/flags/4x3/ru.svg', // Russia
    '/flags/4x3/rw.svg', // Rwanda
    '/flags/4x3/sa.svg', // Saudi Arabia
    '/flags/4x3/sb.svg', // Solomon Islands
    '/flags/4x3/sc.svg', // Seychelles
    '/flags/4x3/sd.svg', // Sudan
    '/flags/4x3/se.svg', // Sweden
    '/flags/4x3/sg.svg', // Singapore
    '/flags/4x3/sh.svg', // Saint Helena
    '/flags/4x3/si.svg', // Slovenia
    '/flags/4x3/sj.svg', // Svalbard and Jan Mayen
    '/flags/4x3/sk.svg', // Slovakia
    '/flags/4x3/sl.svg', // Sierra Leone
    '/flags/4x3/sm.svg', // San Marino
    '/flags/4x3/sn.svg', // Senegal
    '/flags/4x3/so.svg', // Somalia
    '/flags/4x3/sr.svg', // Suriname
    '/flags/4x3/ss.svg', // South Sudan
    '/flags/4x3/st.svg', // São Tomé and Príncipe
    '/flags/4x3/su.svg', // Soviet Union
    '/flags/4x3/sv.svg', // El Salvador
    '/flags/4x3/sx.svg', // Sint Maarten
    '/flags/4x3/sy.svg', // Syria
    '/flags/4x3/sz.svg', // Eswatini
    '/flags/4x3/tc.svg', // Turks and Caicos Islands
    '/flags/4x3/td.svg', // Chad
    '/flags/4x3/tf.svg', // French Southern and Antarctic Lands
    '/flags/4x3/tg.svg', // Togo
    '/flags/4x3/th.svg', // Thailand
    '/flags/4x3/tj.svg', // Tajikistan
    '/flags/4x3/tk.svg', // Tokelau
    '/flags/4x3/tl.svg', // Timor-Leste
    '/flags/4x3/tm.svg', // Turkmenistan
    '/flags/4x3/tn.svg', // Tunisia
    '/flags/4x3/to.svg', // Tonga
    '/flags/4x3/tr.svg', // Turkey
    '/flags/4x3/tt.svg', // Trinidad and Tobago
    '/flags/4x3/tv.svg', // Tuvalu
    '/flags/4x3/tz.svg', // Tanzania
    '/flags/4x3/ua.svg', // Ukraine
    '/flags/4x3/ug.svg', // Uganda
    '/flags/4x3/um.svg', // United States Minor Outlying Islands
    '/flags/4x3/un.svg', // United Nations
    '/flags/4x3/us.svg', // United States
    '/flags/4x3/uy.svg', // Uruguay
    '/flags/4x3/uz.svg', // Uzbekistan
    '/flags/4x3/va.svg', // Vatican City
    '/flags/4x3/vc.svg', // Saint Vincent and the Grenadines
    '/flags/4x3/ve.svg', // Venezuela
    '/flags/4x3/vg.svg', // British Virgin Islands
    '/flags/4x3/vn.svg', // Vietnam
    '/flags/4x3/vu.svg', // Vanuatu
    '/flags/4x3/wf.svg', // Wallis and Futuna
    '/flags/4x3/ws.svg', // Samoa
    '/flags/4x3/ye.svg', // Yemen
    '/flags/4x3/yt.svg', // Mayotte
    '/flags/4x3/za.svg', // South Africa
    '/flags/4x3/zm.svg', // Zambia
    '/flags/4x3/zw.svg', // Zimbabwe
];   
  
export default allFlags;
  