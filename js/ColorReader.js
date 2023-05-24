/*
class ScrollReact {
  #reactions = {
  }

  constructor( reactions ) {
    this.#reactions = reactions;
  }
  #rectsToMiddle( rect ) {
    const yMiddle = ( rect.height / 2 ) + rect.y;
    const xMiddle = ( rect.width / 2 ) + rect.x;
    return { yMiddle, xMiddle };
  }
  #getMiddle( element ) {
    const rectParams  = element.getClientRects()[ 0 ];
    const middle = this.#rectsToMiddle( rectParams );
    return middle;
  }
  #getSideCoordinates( element ) {
    const el = element.getClientRects()[ 0 ];
    const top     = el.top;
    const bottom  = el.bottom;
    const left    = el.left;
    const right   = el.right;
    const rectParams  = {
      top,
      bottom,
      left,
      right
    }
    return rectParams;
  }
  react( className ) {
    return this.#reactions[ className ];
  }
  onBackground( element, backgroundElement) {
    const middlePoint           = this.#getMiddle( element );
    const backgroundBoundaries  = this.#getSideCoordinates( backgroundElement );

    if ( backgroundBoundaries.top      >   middlePoint.yMiddle ) {
      return false;
    }
    if ( backgroundBoundaries.bottom   <   middlePoint.yMiddle ) {
      return false;
    }
    if ( backgroundBoundaries.left     >   middlePoint.xMiddle ) {
      return false;
    }
    if ( backgroundBoundaries.right    <   middlePoint.xMiddle ) {
      return false;
    }
    return true;
  }
  getReplacableClasses(){
    return Object.values( this.#reactions );
  }
  getBackgrounds(){
    return Object.keys( this.#reactions );
  }
}

const sw = ( element, className, classNameToRemove ) => {
  element.classList.remove( classNameToRemove );
  element.classList.add( className );

  return element;
}

const onScrollMethod = () => {

  const relatives = document.getElementsByName( "relative" );
  const backgrounds = [ ...document.getElementsByName( "bg-black" ), ...document.getElementsByName("bg-white") ];

  const scReact = new ScrollReact({
    "bg-black": "header-white",
    "bg-white": "header-black"
  });


  for ( let i = 0; i < relatives.length; i++ ) {
    for (let n = 0; n < backgrounds.length; n++ ) {
      if ( scReact.onBackground( relatives[ i ], backgrounds[ n ] ))
      {
        let oldClass;
        let backgroundClass;
        for ( let background of scReact.getBackgrounds()) {


          if (backgrounds[n].getAttribute("name") === background) {
            backgroundClass = background;

            break;
          }
        }
        
        for (let reactable of scReact.getReplacableClasses()) {
          
          if (relatives[i].classList.contains(reactable)) {

            oldClass = reactable;
            break;
          }
        }

        if (oldClass !== scReact.react( backgroundClass )) {
          sw(relatives[ i ], scReact.react( backgroundClass ), oldClass);
          /*relatives[ i ].classList.remove( oldClass );
          relatives[ i ].classList.add( scReact.react( backgroundClass ) );*/
          /*
        }
      }
    }
  }
}
document.addEventListener("scroll", ( scroll )=>{
  onScrollMethod();
});
*/