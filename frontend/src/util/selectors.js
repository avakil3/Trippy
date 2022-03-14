export const PinsFilter = (pins,region,tripType) => {
    const pinsArr = Object.values(pins);
    console.log(region)
    console.log(tripType)
    if (region === "anywhere" && tripType === "any") return pinsArr;
    else if (region === "anywhere") return pinsArr.filter(pin => pin.tripType === tripType)
    else if (tripType === "any") return pinsArr.filter(pin => pin.region === region)
    else return pinsArr.filter(pin => pin.region === region && pin.tripType === tripType)
};