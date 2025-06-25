function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "pepalfenas.unimestre.com")) {
        return "PROXY devhioliveira.vps-kinghost.net:8080";
    }
    return "DIRECT";
}
