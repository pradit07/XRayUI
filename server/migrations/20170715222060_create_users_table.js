exports.up = function(knex, Promise) {
    return new Promise(async (resolve, reject) => {
        try {
            await Promise.all([
                knex.schema.createTable('users', function(users) {
                    users.increments('id').primary().unsigned();
                    users.string('userid').notNullable();
                    users.string('username').notNullable();
                    users.string('password').notNullable();
                }).createTable('threats', function(threats) {
                    threats.increments('weaponid').primary().unsigned();
                    threats.timestamp('created_at').notNullable();
                    threats.timestamp('updated_at').notNullable();
                    threats.string('weapon').notNullable();
                    threats.longtext('img').notNullable();
                    threats.string('percentage').notNullable();
                }).then(function() {
                    return knex('users').insert([
                        {userid: '3333', username: 'USER', password: '1234'}
                    ])
                }),
            ]);
            console.log('Tables created successfully!');
            resolve();
        }
        catch(error) {
            reject(error);
        }
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
