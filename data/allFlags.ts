// Define the CountryFlag type
type CountryFlag = {
  name: string;
  flag: string;
};

// Create the array of country flags with their respective country names
const allFlags: CountryFlag[] = [
  { name: 'Andorra', flag: '/flags/4x3/ad.svg' },
  { name: 'United Arab Emirates', flag: '/flags/4x3/ae.svg' },
  { name: 'Afghanistan', flag: '/flags/4x3/af.svg' },
  { name: 'Antigua and Barbuda', flag: '/flags/4x3/ag.svg' },
  { name: 'Anguilla', flag: '/flags/4x3/ai.svg' },
  { name: 'Albania', flag: '/flags/4x3/al.svg' },
  { name: 'Armenia', flag: '/flags/4x3/am.svg' },
  { name: 'Angola', flag: '/flags/4x3/ao.svg' },
  { name: 'Antarctica', flag: '/flags/4x3/aq.svg' },
  { name: 'Argentina', flag: '/flags/4x3/ar.svg' },
  { name: 'American Samoa', flag: '/flags/4x3/as.svg' },
  { name: 'Austria', flag: '/flags/4x3/at.svg' },
  { name: 'Australia', flag: '/flags/4x3/au.svg' },
  { name: 'Aruba', flag: '/flags/4x3/aw.svg' },
  { name: 'Åland Islands', flag: '/flags/4x3/ax.svg' },
  { name: 'Azerbaijan', flag: '/flags/4x3/az.svg' },
  { name: 'Bosnia and Herzegovina', flag: '/flags/4x3/ba.svg' },
  { name: 'Barbados', flag: '/flags/4x3/bb.svg' },
  { name: 'Bangladesh', flag: '/flags/4x3/bd.svg' },
  { name: 'Belgium', flag: '/flags/4x3/be.svg' },
  { name: 'Burkina Faso', flag: '/flags/4x3/bf.svg' },
  { name: 'Bulgaria', flag: '/flags/4x3/bg.svg' },
  { name: 'Bahrain', flag: '/flags/4x3/bh.svg' },
  { name: 'Burundi', flag: '/flags/4x3/bi.svg' },
  { name: 'Benin', flag: '/flags/4x3/bj.svg' },
  { name: 'Saint Barthélemy', flag: '/flags/4x3/bl.svg' },
  { name: 'Bermuda', flag: '/flags/4x3/bm.svg' },
  { name: 'Brunei', flag: '/flags/4x3/bn.svg' },
  { name: 'Bolivia', flag: '/flags/4x3/bo.svg' },
  { name: 'Bonaire, Sint Eustatius and Saba', flag: '/flags/4x3/bq.svg' },
  { name: 'Brazil', flag: '/flags/4x3/br.svg' },
  { name: 'Bahamas', flag: '/flags/4x3/bs.svg' },
  { name: 'Bhutan', flag: '/flags/4x3/bt.svg' },
  { name: 'Bouvet Island', flag: '/flags/4x3/bv.svg' },
  { name: 'Botswana', flag: '/flags/4x3/bw.svg' },
  { name: 'Belarus', flag: '/flags/4x3/by.svg' },
  { name: 'Belize', flag: '/flags/4x3/bz.svg' },
  { name: 'Canada', flag: '/flags/4x3/ca.svg' },
  { name: 'Democratic Republic of the Congo', flag: '/flags/4x3/cd.svg' },
  { name: 'Central African Republic', flag: '/flags/4x3/cf.svg' },
  { name: 'Republic of the Congo', flag: '/flags/4x3/cg.svg' },
  { name: 'Switzerland', flag: '/flags/4x3/ch.svg' },
  { name: 'Ivory Coast', flag: '/flags/4x3/ci.svg' },
  { name: 'Cook Islands', flag: '/flags/4x3/ck.svg' },
  { name: 'Chile', flag: '/flags/4x3/cl.svg' },
  { name: 'Cameroon', flag: '/flags/4x3/cm.svg' },
  { name: 'China', flag: '/flags/4x3/cn.svg' },
  { name: 'Colombia', flag: '/flags/4x3/co.svg' },
  { name: 'Costa Rica', flag: '/flags/4x3/cr.svg' },
  { name: 'Cuba', flag: '/flags/4x3/cu.svg' },
  { name: 'Cape Verde', flag: '/flags/4x3/cv.svg' },
  { name: 'Curaçao', flag: '/flags/4x3/cw.svg' },
  { name: 'Christmas Island', flag: '/flags/4x3/cx.svg' },
  { name: 'Cyprus', flag: '/flags/4x3/cy.svg' },
  { name: 'Czech Republic', flag: '/flags/4x3/cz.svg' },
  { name: 'Germany', flag: '/flags/4x3/de.svg' },
  { name: 'Djibouti', flag: '/flags/4x3/dj.svg' },
  { name: 'Denmark', flag: '/flags/4x3/dk.svg' },
  { name: 'Dominica', flag: '/flags/4x3/dm.svg' },
  { name: 'Dominican Republic', flag: '/flags/4x3/do.svg' },
  { name: 'Algeria', flag: '/flags/4x3/dz.svg' },
  { name: 'Estonia', flag: '/flags/4x3/ee.svg' },
  { name: 'Egypt', flag: '/flags/4x3/eg.svg' },
  { name: 'Western Sahara', flag: '/flags/4x3/eh.svg' },
  { name: 'Eritrea', flag: '/flags/4x3/er.svg' },
  { name: 'Spain', flag: '/flags/4x3/es.svg' },
  { name: 'Ethiopia', flag: '/flags/4x3/et.svg' },
  { name: 'European Union', flag: '/flags/4x3/eu.svg' },
  { name: 'Finland', flag: '/flags/4x3/fi.svg' },
  { name: 'Fiji', flag: '/flags/4x3/fj.svg' },
  { name: 'Falkland Islands', flag: '/flags/4x3/fk.svg' },
  { name: 'Federated States of Micronesia', flag: '/flags/4x3/fm.svg' },
  { name: 'Faroe Islands', flag: '/flags/4x3/fo.svg' },
  { name: 'France', flag: '/flags/4x3/fr.svg' },
  { name: 'Gabon', flag: '/flags/4x3/ga.svg' },
  { name: 'United Kingdom', flag: '/flags/4x3/gb.svg' },
  { name: 'Grenada', flag: '/flags/4x3/gd.svg' },
  { name: 'Georgia', flag: '/flags/4x3/ge.svg' },
  { name: 'French Guiana', flag: '/flags/4x3/gf.svg' },
  { name: 'Guernsey', flag: '/flags/4x3/gg.svg' },
  { name: 'Ghana', flag: '/flags/4x3/gh.svg' },
  { name: 'Gibraltar', flag: '/flags/4x3/gi.svg' },
  { name: 'Greenland', flag: '/flags/4x3/gl.svg' },
  { name: 'Gambia', flag: '/flags/4x3/gm.svg' },
  { name: 'Guinea', flag: '/flags/4x3/gn.svg' },
  { name: 'Guadeloupe', flag: '/flags/4x3/gp.svg' },
  { name: 'Equatorial Guinea', flag: '/flags/4x3/gq.svg' },
  { name: 'Greece', flag: '/flags/4x3/gr.svg' },
  { name: 'Guatemala', flag: '/flags/4x3/gt.svg' },
  { name: 'Guam', flag: '/flags/4x3/gu.svg' },
  { name: 'Guinea-Bissau', flag: '/flags/4x3/gw.svg' },
  { name: 'Guyana', flag: '/flags/4x3/gy.svg' },
  { name: 'Haiti', flag: '/flags/4x3/ht.svg' },
  { name: 'Holy See', flag: '/flags/4x3/va.svg' },
  { name: 'Honduras', flag: '/flags/4x3/hn.svg' },
  { name: 'Hungary', flag: '/flags/4x3/hu.svg' },
  { name: 'Iceland', flag: '/flags/4x3/is.svg' },
  { name: 'India', flag: '/flags/4x3/in.svg' },
  { name: 'Indonesia', flag: '/flags/4x3/id.svg' },
  { name: 'Iran', flag: '/flags/4x3/ir.svg' },
  { name: 'Iraq', flag: '/flags/4x3/iq.svg' },
  { name: 'Ireland', flag: '/flags/4x3/ie.svg' },
  { name: 'Israel', flag: '/flags/4x3/il.svg' },
  { name: 'Italy', flag: '/flags/4x3/it.svg' },
  { name: 'Jamaica', flag: '/flags/4x3/jm.svg' },
  { name: 'Japan', flag: '/flags/4x3/jp.svg' },
  { name: 'Jersey', flag: '/flags/4x3/je.svg' },
  { name: 'Jordan', flag: '/flags/4x3/jo.svg' },
  { name: 'Kazakhstan', flag: '/flags/4x3/kz.svg' },
  { name: 'Kenya', flag: '/flags/4x3/ke.svg' },
  { name: 'Kiribati', flag: '/flags/4x3/ki.svg' },
  { name: 'Korea, North', flag: '/flags/4x3/kp.svg' },
  { name: 'Korea, South', flag: '/flags/4x3/kr.svg' },
  { name: 'Kuwait', flag: '/flags/4x3/kw.svg' },
  { name: 'Kyrgyzstan', flag: '/flags/4x3/kg.svg' },
  { name: 'Laos', flag: '/flags/4x3/la.svg' },
  { name: 'Latvia', flag: '/flags/4x3/lv.svg' },
  { name: 'Lebanon', flag: '/flags/4x3/lb.svg' },
  { name: 'Lesotho', flag: '/flags/4x3/ls.svg' },
  { name: 'Liberia', flag: '/flags/4x3/lr.svg' },
  { name: 'Libya', flag: '/flags/4x3/ly.svg' },
  { name: 'Liechtenstein', flag: '/flags/4x3/li.svg' },
  { name: 'Lithuania', flag: '/flags/4x3/lt.svg' },
  { name: 'Luxembourg', flag: '/flags/4x3/lu.svg' },
  { name: 'Macao', flag: '/flags/4x3/mo.svg' },
  { name: 'Madagascar', flag: '/flags/4x3/mg.svg' },
  { name: 'Malawi', flag: '/flags/4x3/mw.svg' },
  { name: 'Malaysia', flag: '/flags/4x3/my.svg' },
  { name: 'Maldives', flag: '/flags/4x3/mv.svg' },
  { name: 'Mali', flag: '/flags/4x3/ml.svg' },
  { name: 'Malta', flag: '/flags/4x3/mt.svg' },
  { name: 'Marshall Islands', flag: '/flags/4x3/mh.svg' },
  { name: 'Martinique', flag: '/flags/4x3/mq.svg' },
  { name: 'Mauritania', flag: '/flags/4x3/mr.svg' },
  { name: 'Mauritius', flag: '/flags/4x3/mu.svg' },
  { name: 'Mayotte', flag: '/flags/4x3/yt.svg' },
  { name: 'Mexico', flag: '/flags/4x3/mx.svg' },
  { name: 'Micronesia', flag: '/flags/4x3/fm.svg' },
  { name: 'Moldova', flag: '/flags/4x3/md.svg' },
  { name: 'Monaco', flag: '/flags/4x3/mc.svg' },
  { name: 'Mongolia', flag: '/flags/4x3/mn.svg' },
  { name: 'Montenegro', flag: '/flags/4x3/me.svg' },
  { name: 'Montserrat', flag: '/flags/4x3/ms.svg' },
  { name: 'Morocco', flag: '/flags/4x3/ma.svg' },
  { name: 'Mozambique', flag: '/flags/4x3/mz.svg' },
  { name: 'Myanmar', flag: '/flags/4x3/mm.svg' },
  { name: 'Namibia', flag: '/flags/4x3/na.svg' },
  { name: 'Nauru', flag: '/flags/4x3/nr.svg' },
  { name: 'Nepal', flag: '/flags/4x3/np.svg' },
  { name: 'Netherlands', flag: '/flags/4x3/nl.svg' },
  { name: 'New Zealand', flag: '/flags/4x3/nz.svg' },
  { name: 'Nicaragua', flag: '/flags/4x3/ni.svg' },
  { name: 'Niger', flag: '/flags/4x3/ne.svg' },
  { name: 'Nigeria', flag: '/flags/4x3/ng.svg' },
  { name: 'Niue', flag: '/flags/4x3/nl.svg' },
  { name: 'Norfolk Island', flag: '/flags/4x3/nf.svg' },
  { name: 'Northern Mariana Islands', flag: '/flags/4x3/mp.svg' },
  { name: 'Norway', flag: '/flags/4x3/no.svg' },
  { name: 'Oman', flag: '/flags/4x3/om.svg' },
  { name: 'Pakistan', flag: '/flags/4x3/pk.svg' },
  { name: 'Palau', flag: '/flags/4x3/pw.svg' },
  { name: 'Palestine', flag: '/flags/4x3/ps.svg' },
  { name: 'Panama', flag: '/flags/4x3/pa.svg' },
  { name: 'Papua New Guinea', flag: '/flags/4x3/pg.svg' },
  { name: 'Paraguay', flag: '/flags/4x3/py.svg' },
  { name: 'Peru', flag: '/flags/4x3/pe.svg' },
  { name: 'Philippines', flag: '/flags/4x3/ph.svg' },
  { name: 'Pitcairn Islands', flag: '/flags/4x3/pn.svg' },
  { name: 'Poland', flag: '/flags/4x3/pl.svg' },
  { name: 'Portugal', flag: '/flags/4x3/pt.svg' },
  { name: 'Puerto Rico', flag: '/flags/4x3/pr.svg' },
  { name: 'Qatar', flag: '/flags/4x3/qa.svg' },
  { name: 'Réunion', flag: '/flags/4x3/re.svg' },
  { name: 'Romania', flag: '/flags/4x3/ro.svg' },
  { name: 'Russian Federation', flag: '/flags/4x3/ru.svg' },
  { name: 'Rwanda', flag: '/flags/4x3/rw.svg' },
  { name: 'Saint Helena', flag: '/flags/4x3/sh.svg' },
  { name: 'Saint Kitts and Nevis', flag: '/flags/4x3/kn.svg' },
  { name: 'Saint Lucia', flag: '/flags/4x3/lc.svg' },
  { name: 'Saint Martin', flag: '/flags/4x3/mf.svg' },
  { name: 'Saint Pierre and Miquelon', flag: '/flags/4x3/pm.svg' },
  { name: 'Saint Vincent and the Grenadines', flag: '/flags/4x3/vc.svg' },
  { name: 'Samoa', flag: '/flags/4x3/ws.svg' },
  { name: 'San Marino', flag: '/flags/4x3/sm.svg' },
  { name: 'Sao Tome and Principe', flag: '/flags/4x3/st.svg' },
  { name: 'Saudi Arabia', flag: '/flags/4x3/sa.svg' },
  { name: 'Senegal', flag: '/flags/4x3/sn.svg' },
  { name: 'Serbia', flag: '/flags/4x3/rs.svg' },
  { name: 'Seychelles', flag: '/flags/4x3/sc.svg' },
  { name: 'Sierra Leone', flag: '/flags/4x3/sl.svg' },
  { name: 'Singapore', flag: '/flags/4x3/sg.svg' },
  { name: 'Sint Maarten', flag: '/flags/4x3/sx.svg' },
  { name: 'Slovakia', flag: '/flags/4x3/sk.svg' },
  { name: 'Slovenia', flag: '/flags/4x3/si.svg' },
  { name: 'Solomon Islands', flag: '/flags/4x3/sb.svg' },
  { name: 'Somalia', flag: '/flags/4x3/so.svg' },
  { name: 'South Africa', flag: '/flags/4x3/za.svg' },
  { name: 'South Georgia and the South Sandwich Islands', flag: '/flags/4x3/gq.svg' },
  { name: 'South Sudan', flag: '/flags/4x3/ss.svg' },
  { name: 'Spain', flag: '/flags/4x3/es.svg' },
  { name: 'Sri Lanka', flag: '/flags/4x3/lk.svg' },
  { name: 'Sudan', flag: '/flags/4x3/sd.svg' },
  { name: 'Suriname', flag: '/flags/4x3/sr.svg' },
  { name: 'Svalbard and Jan Mayen', flag: '/flags/4x3/sj.svg' },
  { name: 'Sweden', flag: '/flags/4x3/se.svg' },
  { name: 'Switzerland', flag: '/flags/4x3/ch.svg' },
  { name: 'Syria', flag: '/flags/4x3/sy.svg' },
  { name: 'Taiwan', flag: '/flags/4x3/tw.svg' },
  { name: 'Tajikistan', flag: '/flags/4x3/tj.svg' },
  { name: 'Tanzania', flag: '/flags/4x3/tz.svg' },
  { name: 'Thailand', flag: '/flags/4x3/th.svg' },
  { name: 'Togo', flag: '/flags/4x3/tg.svg' },
  { name: 'Tokelau', flag: '/flags/4x3/tk.svg' },
  { name: 'Tonga', flag: '/flags/4x3/to.svg' },
  { name: 'Trinidad and Tobago', flag: '/flags/4x3/tt.svg' },
  { name: 'Tunisia', flag: '/flags/4x3/tn.svg' },
  { name: 'Turkey', flag: '/flags/4x3/tr.svg' },
  { name: 'Turkmenistan', flag: '/flags/4x3/tm.svg' },
  { name: 'Turks and Caicos Islands', flag: '/flags/4x3/tc.svg' },
  { name: 'Tuvalu', flag: '/flags/4x3/tv.svg' },
  { name: 'Uganda', flag: '/flags/4x3/ug.svg' },
  { name: 'Ukraine', flag: '/flags/4x3/ua.svg' },
  { name: 'United Arab Emirates', flag: '/flags/4x3/ae.svg' },
  { name: 'United Kingdom', flag: '/flags/4x3/gb.svg' },
  { name: 'United States', flag: '/flags/4x3/us.svg' },
  { name: 'Uruguay', flag: '/flags/4x3/uy.svg' },
  { name: 'Uzbekistan', flag: '/flags/4x3/uz.svg' },
  { name: 'Vanuatu', flag: '/flags/4x3/vu.svg' },
  { name: 'Venezuela', flag: '/flags/4x3/ve.svg' },
  { name: 'Vietnam', flag: '/flags/4x3/vn.svg' },
  { name: 'Wallis and Futuna', flag: '/flags/4x3/wf.svg' },
  { name: 'Western Sahara', flag: '/flags/4x3/eh.svg' },
  { name: 'Yemen', flag: '/flags/4x3/ye.svg' },
  { name: 'Zambia', flag: '/flags/4x3/zm.svg' },
  { name: 'Zimbabwe', flag: '/flags/4x3/zw.svg' }
];

export default allFlags;
