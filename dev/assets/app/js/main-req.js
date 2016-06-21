function getEntityData(id) {
    var parts = id.split('_');
    var url = AlFehrestNS.Config('url') + parts[0] + "/" + id + "/related/?types=person,tribe";
    return $.ajax({
        url : url,
        headers: { "Content-language": "ar" }
    });

}

function getEntityList() {
    var url1 = AlFehrestNS.Config('url') + "tribe";
    var url2 = AlFehrestNS.Config('url') + "person";
    return $.when(
        $.ajax({url : url1, headers: { "Content-language": "ar" }}),
        $.ajax({url : url2, headers: { "Content-language": "ar" }})
    );
}

function getEntityDetails(id) {

    var parts = id.split('_');
    var url = AlFehrestNS.Config('url') + parts[0] + "/" + id + "/";
    return $.ajax({
        url : url,
        headers: { "Content-language": "ar" }
    });

}