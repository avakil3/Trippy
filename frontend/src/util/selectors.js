export const PinsFilter = (pins,state) => {
    const pinsArr = Object.values(pins);

    if (state.anywhere && state.any) return pinsArr;
    else if (state.anywhere) return pinsArr.filter(pin => pin.tripType.some(tripType => state[tripType] )); 
    else if (state.any) return pinsArr.filter(pin => state[pin.region])
    else return pinsArr.filter(pin => state[pin.region] && pin.tripType.some(tripType => 
        state[tripType] ));

    // if (region === "anywhere" && tripType === "any") return pinsArr;
    // else if (region === "anywhere") return pinsArr.filter(pin => pin.tripType === tripType)
    // else if (tripType === "any") return pinsArr.filter(pin => pin.region === region)
    // else return pinsArr.filter(pin => pin.region === region && pin.tripType === tripType)
};