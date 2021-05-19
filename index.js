function returnFirstTwoDrivers(drive)
{
    const drivers = () => [drive[0], drive[1]];
    return drivers();
}
function returnLastTwoDrivers(drive)
{
    const drivers = () => [drive[drive.length-2], drive [drive.length-1]];
    return drivers();
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(x)
{
    return (fare) => (fare * x);
}
function fareDoubler(j)
{
    const twiced = createFareMultiplier(2);
    return twiced(j);
}
function fareTripler(j)
{
    const tripled = createFareMultiplier(3);
    return tripled(j);
}
function selectDifferentDrivers(rock, hardPlace)
{
    return hardPlace(rock);
}