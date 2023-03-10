const userData = require('../MODEL/user.model') 


async function create(data) {
    return await userData.create(data)
}

async function read(filter, proj) {
    return await userData.find(filter, proj)
}

async function readAllFlalist(filter, proj) {
    return await userData.find(filter, proj)
    .populate('flalistId', {})
        .populate('songList', {});
}

async function readOne(filter, proj) {
    let res = await read(filter, proj)
    return res[0]
}
async function update(filter, newData) {
    return await userData.updateMany(filter, newData)
}

async function updateFlalist(userId, flalistId) {
    return await userData.updateOne({_id: userId},{ $push: { flalistslist: flalistId } } )
}

async function del(id) {
    return await update(id, { isActive: false })
}




module.exports = { create, read, update, del,readOne, readAllFlalist, updateFlalist }
