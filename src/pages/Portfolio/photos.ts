import img from '../../images/1-IMG.jpg'
import img1 from '../../images/2-IMG_0054.jpg'
import img2 from '../../images/3-IMG_0047.jpg'
import img3 from '../../images/4-IMG_0030.jpg'
import img4 from'../../images/5-IMG_7187.jpg'
import img5 from '../../images/6-IMG_7431.jpg'
import img6 from '../../images/7-IMG_7475.jpg'
import img7 from '../../images/8-IMG_7661.jpg'
import img8 from '../../images/9-IMG_8086.jpg'
import img9 from '../../images/10-IMG_8294.jpg'
import img10 from '../../images/11-IMG_8306.jpg'
import img11 from '../../images/12-IMG_8613.jpg'
import img12 from '../../images/13-IMG_9024.jpg'
import img13 from '../../images/14-IMG_9098.jpg'
import img14 from '../../images/15-IMG_9194.jpg'
import img15 from '../../images/16-IMG_9360.jpg'
import img16 from '../../images/17-IMG_9426-Enhanced-NR.jpg'
import img17 from '../../images/18-IMG_9549.jpg'
import img18 from '../../images/19-IMG_9667.jpg'
import img19 from '../../images/20-IMG_9679.jpg'
import img20 from '../../images/21-IMG_9700.jpg'
import img21 from '../../images/22-IMG_0658.jpg'
import img22 from '../../images/23-IMG_0878.jpg'
import img23 from '../../images/24-IMG_0886.jpg'
import img24 from '../../images/25-IMG_1033.jpg'
import img25 from '../../images/26-IMG_1644.jpg'
import img26 from '../../images/27-IMG_1664.jpg'
import img27 from '../../images/28-IMG_1771-Enhanced-NR.jpg'
import img28 from '../../images/29-IMG_1847.jpg'
import img29 from '../../images/30-IMG_1895.jpg'
import img30 from '../../images/31-IMG_2111.jpg'
import img31 from '../../images/32-IMG_2362.jpg'
import img32 from '../../images/33-IMG_2635.jpg'
import img33 from '../../images/34-IMG_3727-Enhanced-NR-2.jpg'
import img34 from '../../images/35-IMG_3837-Enhanced-NR.jpg'
import img35 from '../../images/36-IMG_3985.jpg'
import img36 from '../../images/37-IMG_4007-Enhanced-NR.jpg'
import img37 from '../../images/38-IMG_4015-Enhanced-NR.jpg'
import img38 from '../../images/39-IMG_4029-Enhanced-NR.jpg'
import img39 from '../../images/40-IMG_4226-Enhanced-NR.jpg'
import img41 from '../../images/41-IMG_4376-Enhanced-NR.jpg'
import img42 from '../../images/42-IMG_4749-Enhanced-NR.jpg'
import img43 from '../../images/43-IMG_4780-Enhanced-NR.jpg'
import img44 from '../../images/44-IMG_4934-Enhanced-NR.jpg'
import img45 from '../../images/45-IMG_5052.jpg'
import img46 from '../../images/46-IMG_5184-Enhanced-NR.jpg'
import img47 from '../../images/47-IMG_5190-Enhanced-NR.jpg'
import img48 from '../../images/48-IMG_5276-Enhanced-NR.jpg'
import img49 from '../../images/49-IMG_5604.jpg'
import img50 from '../../images/50-IMG_5664.jpg'
import img51 from '../../images/51-IMG_5911-Enhanced-NR.jpg'
import img52 from '../../images/52-IMG_6015-Enhanced-NR.jpg'
import img53 from '../../images/53-IMG_6174-Enhanced-NR.jpg'
import img54 from '../../images/54-IMG_6240-Enhanced-NR.jpg'
import img55 from '../../images/55-IMG_6287-Enhanced-NR.jpg'
import img56 from '../../images/56-IMG_6310-Enhanced-NR.jpg'
import img57 from '../../images/57-IMG_6354-Enhanced-NR.jpg'
import img58 from '../../images/58-IMG_7039-Enhanced-NR.jpg'
import img59 from '../../images/59-IMG_7094.jpg'
import img60 from '../../images/60-IMG_7117.jpg'
import img61 from '../../images/61-IMG_7458-Enhanced-NR.jpg'


const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];



const rawPhotos = [
  { src: img, width: 4946, height: 3297 }, //bw 
  { src: img1, width: 2048, height: 1365 }, // braden trick
  { src: img2, width: 1365, height: 2048 }, //b plant
  { src: img3, width: 5184 , height: 3456 }, // kiss head
  { src: img4, width: 4927, height: 3456 }, //moo
  { src: img5, width: 3764, height: 3456 }, //baby setup
  { src: img6, width: 5184, height: 3456 },//sonogram
  { src: img7, width: 5184, height: 3456 }, //sono and sky
  { src: img8, width: 5184, height: 3456 }, // gpa
  { src: img9, width: 3456, height: 4672}, // simi
  { src: img10, width: 3456 , height: 4338}, // simi
  { src: img11, width: 5184, height: 3456 },//scout
  { src: img12, width: 5127 , height: 3418  }, //mom and bbs
  { src: img13, width: 3456 , height: 5184 },//bbs
  { src: img14, width: 5184, height: 3456 }, //bbs
  { src: img15, width: 1776, height: 1184 }, //han
  { src: img16, width: 3456 , height: 5184 }, //han
  { src: img17, width: 5184, height: 3456 }, //me
  { src: img18, width: 5184, height: 3229 },// tre clouds
  { src: img19, width: 5033, height: 3355 }, //tre
  { src: img20, width: 4941, height: 3924 }, //airplane
  { src: img21, width: 5184, height: 3456 }, //w dog
  { src: img22, width: 5184, height: 3456 }, //mount
  { src: img23, width: 5184, height: 3338 }, //mount
  { src: img24, width: 5184, height: 3456 }, //me in mount
  { src: img25, width: 3738, height: 2677 }, //preg water
  { src: img26, width: 3237, height: 4893 }, // preg water
  { src: img27, width: 3445, height: 5168 }, // engage
  { src: img28, width: 2303, height: 2458 }, //engage run
  { src: img29, width: 1714, height: 2255 }, //engage choke
  { src: img30, width: 3406, height: 4969 }, // engage spin
  { src: img31, width: 3456, height: 5184 }, // sister
  { src: img32, width: 3456, height: 5184 }, // lex photos
  { src: img33, width: 3278, height: 3979 }, //triangle
  { src: img34, width: 1707, height: 2560 }, //boy field
  { src: img35, width: 3348, height: 5022 }, //chair
  { src: img36, width: 3456, height: 5184 }, //chair couple
  { src: img37, width: 3456, height: 5184 }, //chair laugh
  { src: img38, width: 3456, height: 5184 }, //forhead kiss baby bump
  { src: img39, width: 3377, height: 3496 }, //black dress red flower
  { src: img41, width: 3456, height: 5184 }, //hartman mom and baby
  { src: img42, width: 3379, height: 5069 }, //hartman mom and baby b & W
  { src: img43, width: 3413, height: 5120 },//hartman mom and baby b & W
  { src: img44, width: 5184, height: 3456 }, //siblings kk
  { src: img45, width: 5184, height: 3456 }, //rock running
  { src: img46, width: 5090, height: 3393 }, //mar dress hold
  { src: img47, width: 3456, height: 5184 }, //mar boston
  { src: img48, width: 3456, height: 5184 }, // m and c boston
  { src: img49, width: 5184, height: 3456 }, //airplan baby
  { src: img50, width: 5184, height: 3456 }, //peekaboo baby
  { src: img51, width: 3456, height: 5184 }, //m and c burr
  { src: img52, width: 3456, height: 5184 }, //baby bump sun
  { src: img53, width: 5184, height: 3456 }, //marriah laying down
  { src: img54, width: 3447, height: 5171 }, //yoga window
  { src: img55, width: 4957, height: 3254 },//yoga 3 posts
  { src: img56, width: 3048, height: 5015 }, //yoga 2
  { src: img57, width: 5184, height: 3456 }, // yoga
  { src: img58, width: 3368, height: 4501 }, //frame
  { src: img59, width:3456, height: 5184 }, //baby
  { src: img60, width: 3456, height: 5184 }, //mom kiss baby
  { src: img61, width: 5184, height: 3456 },//cactus
];

const photos = rawPhotos.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: photo.src,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.src,
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;