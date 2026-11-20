export const clinic = {
  name: 'Sadiq Digital X-Ray Clinic',
  doctor: 'Aslat Khan',
  years: '20+',
  phone: '+923005720551',       // TODO: change
  whatsapp: '923005720551',       // TODO: change (no + sign)
  address: 'Ishfaq Plaza Takht Bhai', // TODO: change
  hours: 'Mon - Sat, 9:00 AM - 7:00 PM', // TODO: change
};

export const services = [
  {
    slug: 'skull-xray', title: 'Skull X-ray', short: 'Head, sinus and facial bones.',
    paths: '<path d="M50 10C28 10 15 26 15 45c0 12 6 20 12 25v14h46V70c6-5 12-13 12-25C85 26 72 10 50 10z"/><circle cx="37" cy="46" r="8"/><circle cx="63" cy="46" r="8"/><path d="M50 56l-4 10h8zM38 84v-8M46 84v-8M54 84v-8M62 84v-8"/>',
    intro: 'A skull X-ray gives a clear image of the bones of the head, including the cranium, facial bones, jaw and sinuses.',
    shows: ['Fractures of the skull and face', 'Sinus problems and infections', 'Bone abnormalities or swelling', 'Injury after a fall or accident'],
    when: 'Doctors usually ask for it after a head injury, for long-lasting sinus pain, or to check facial and jaw bones.',
    prep: 'Remove earrings, hair clips, glasses, dentures and any metal near the head.',
    time: 'About 5 to 10 minutes',
  },
  {
    slug: 'chest-xray', title: 'Chest X-ray', short: 'Lungs, ribs and heart outline.',
    paths: '<path d="M50 8v84"/><path d="M50 22C30 22 16 30 12 50M50 36C32 36 20 42 16 60M50 50C34 50 24 56 22 70M50 22c20 0 34 8 38 28M50 36c18 0 30 6 34 24M50 50c16 0 26 6 28 20"/><path d="M40 12h20"/>',
    intro: 'A chest X-ray is the most common X-ray test. It shows the lungs, ribs, heart outline and the airways in one quick image.',
    shows: ['Chest infections such as pneumonia', 'Fluid or air around the lungs', 'Heart size and outline', 'Rib fractures'],
    when: 'Recommended for long cough, breathing difficulty, chest pain, fever, or as part of a routine medical check.',
    prep: 'Remove necklaces and metal items. Wear light clothing or a gown. Tell the technician if you may be pregnant.',
    time: 'About 5 minutes',
  },
  {
    slug: 'bone-xray', title: 'Bone X-ray', short: 'Fractures in arms, legs and joints.',
    paths: '<path d="M30 74L70 26"/><path d="M22 66a9 9 0 1 0-8 10 9 9 0 0 0 10 8M34 82a9 9 0 1 0 8-10"/><path d="M78 34a9 9 0 1 0 8-10 9 9 0 0 0-10-8M66 18a9 9 0 1 0-8 10"/>',
    intro: 'A bone X-ray finds breaks, cracks and changes in the arms, legs, hips, shoulders and other bones.',
    shows: ['Broken or cracked bones', 'Joint damage and arthritis', 'Bone infection or growth problems', 'Healing progress after a fracture'],
    when: 'Recommended after an injury, for bone or joint pain that does not go away, or to check how a fracture is healing.',
    prep: 'Keep the injured area still. Remove jewellery and metal near the area. Wear loose clothing.',
    time: 'About 5 to 15 minutes',
  },
  {
    slug: 'backbone-xray', title: 'Backbone X-ray', short: 'Neck, upper and lower spine.',
    paths: '<rect x="36" y="6" width="28" height="12" rx="5"/><rect x="34" y="22" width="32" height="12" rx="5"/><rect x="32" y="38" width="36" height="13" rx="5"/><rect x="30" y="55" width="40" height="14" rx="5"/><rect x="32" y="73" width="36" height="13" rx="5"/><path d="M50 4v90M20 30h12M68 30h12M18 62h12M70 62h12"/>',
    intro: 'A spine X-ray shows the vertebrae of the neck, upper back and lower back, and how they line up.',
    shows: ['Spine curve problems such as scoliosis', 'Disc space narrowing', 'Fractures of the vertebrae', 'Arthritis and bone spurs'],
    when: 'Recommended for neck or back pain, injury, posture concerns, or before and after spine treatment.',
    prep: 'Remove belts, jewellery and any metal on the back. Wear a gown if asked.',
    time: 'About 10 to 15 minutes',
  },
  {
    slug: 'hand-joint-xray', title: 'Hand and Joint X-ray', short: 'Wrists, fingers, knees and more.',
    paths: '<path d="M30 92V58L20 40a5 5 0 0 1 9-4l7 12V16a5 5 0 0 1 10 0v28V10a5 5 0 0 1 10 0v34V16a5 5 0 0 1 10 0v36l8-14a5 5 0 0 1 9 4L72 70v22z"/>',
    intro: 'This X-ray checks the small bones and joints of the hands, wrists, fingers, knees, ankles and feet.',
    shows: ['Finger and wrist fractures', 'Arthritis in joints', 'Joint swelling and bone changes', 'Foreign objects in soft tissue'],
    when: 'Recommended for joint pain, swelling, stiffness or after a fall or sports injury.',
    prep: 'Remove rings, watches and bracelets. Keep the joint relaxed when positioned.',
    time: 'About 5 to 10 minutes',
  },
];
