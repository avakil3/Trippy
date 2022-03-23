export const PinsFilter = (pins,state) => {
    const pinsArr = Object.values(pins);
    return pinsArr.filter(pin => state[pin.region] && pin.tripType.some(tripType => state[tripType] ));
};