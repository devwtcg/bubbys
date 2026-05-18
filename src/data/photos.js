const W = "https://static.wixstatic.com/media/";

const sized = (id, w = 1200) => {
  const m = id.match(/_d_(\d+)_(\d+)_/);
  const ratio = m ? Number(m[2]) / Number(m[1]) : 2 / 3;
  const h = Math.round(w * ratio);
  return `${W}${id}/v1/fill/w_${w},h_${h},q_90,enc_avif,quality_auto/${id}`;
};

export const PHOTOS = {
  bagelHero:   sized("88e84c_073feaa2390445f79dad02f5c1c7a992~mv2_d_5184_3456_s_4_2.jpg", 900),
  bagelStack:  sized("88e84c_b08873ef53274dc5bb2f9bafd929ceeb~mv2.jpg", 700),
  bagelTray:   sized("88e84c_cdcc7598eed3466da84390bf9010cbd6~mv2_d_5184_3456_s_4_2.jpg", 1200),
  bagelClose:  sized("88e84c_5b2c83fbf81d4804b2e47b3507f3003d~mv2_d_4800_3456_s_4_2.jpg", 1200),
  bagelBoard:  sized("88e84c_d7025c9dfe2140d091a674b95cdfc2da~mv2_d_4567_3044_s_4_2.jpg", 1400),
  bagelHand:   sized("88e84c_cf4a4578e0cf4cff8021252e8da957b2~mv2_d_3024_4032_s_4_2.jpeg", 800),
  bagelPan:    sized("88e84c_99db747be0f04c96a9f6be2dbd3536e1~mv2_d_4910_3273_s_4_2.jpg", 1200),
  bagelTop:    sized("88e84c_0a49b323e0b34f3e972718ba42aa7268~mv2_d_5184_3456_s_4_2.jpg", 1200),
  ovenShot:    sized("88e84c_672483b4b8874722978db8d8ac6adf2d~mv2.jpg", 1200),
  smear1:      sized("88e84c_c081c1e00d53411c8a6c2bc6655ba2ec~mv2_d_5184_3456_s_4_2.jpg", 900),
  smear2:      sized("88e84c_e3c4dcce823949bfb2243910b0a4f968~mv2_d_5184_3456_s_4_2.jpg", 900),
  shop1:       sized("88e84c_ae368e10b33f4b4394d2e45bdc1e5c10~mv2_d_3328_3888_s_4_2.jpg", 800),
  shop2:       sized("88e84c_65f1875af39e487db7c8765b119ae17b~mv2_d_5184_3456_s_4_2.jpg", 1200),
  loxSpread:   sized("88e84c_c2fb6187c72d406d94fde518c96ccd21~mv2_d_5184_3456_s_4_2.jpg", 1200),
  display:     sized("88e84c_6d83023d969043b29ebc2a4500d245e0~mv2_d_4771_3181_s_4_2.jpg", 1400),
  burger:      sized("88e84c_0ee4e150263046a887b7d256d351126a~mv2.jpg", 800),
  sandwich1:   sized("88e84c_e329cc0e3bbc459291c9d92c81cdd74f~mv2.jpg", 700),
  sandwich2:   sized("88e84c_90428ec44a6044ba9eb04a1b6891ca59~mv2.jpg", 800),
  sandwich3:   sized("88e84c_96e3d518fbb7469d8ef532397f52f908~mv2.jpg", 800),
  sandwich4:   sized("88e84c_2cbf92b591754e739b154326e8331619~mv2.jpg", 700),
  sandwich5:   sized("88e84c_d0234119f3d74c3eb8b03304aecf7807~mv2.jpg", 800),
};
