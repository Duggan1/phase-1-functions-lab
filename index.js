// Code your solution in this file!


distanceFromHqInBlocks = (loc) => {
    if (loc<42) {
        return (42 - loc )
    }
    else {
        return (loc - 42)
    }
  }

  distanceFromHqInFeet = (fet) => {
    if (fet<42) {
        return ((42 - fet ) * 264)
    }
    else {
        return ((fet - 42) * 264)
    }
  }

distanceTravelledInFeet = (sp, ep) => {
    if (sp > ep) {
        return (264 * (sp - ep))
    } else {
        return (264 * (ep - sp))
    }
    
}

calculatesFarePrice = (sp , ep) => {
    let dist = distanceTravelledInFeet(sp,ep)
    if (dist < 400) {
        return 0 
    }
    else if (dist >= 400 && dist <= 2000 ) {
        return (dist - 400) * .02
    }
    else if (dist >= 2000 && dist <= 2500 ) {
        return 25
    }
    else if (dist > 2500) {
        return "cannot travel that far"
    }











    // if (sp > ep) {
    //     const dist = (264 * (sp - ep))
    //     return dist
    // } else {
    //     const dist = (264 * (ep - sp))
    //     return dist
    // }
    // if (dist < 400) {
    //     return 0
    // }
    // else if (dist >= 400 && dist <= 2000 ) {
    //     return dist * .02
    // }
}