






function getMembers(db, req, res) {
    const query = `SELECT member.user_id, member.membership_type, user.username, user.email
                   FROM member JOIN user 
                   ON member.user_id = user.user.id`;

    db.all(query, (err, rows) => {
        if (err) {
            console.error('Error getting members:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const members = rows.map(row => ({
                user_id: row.user_id,
                membership_type: row.membership_type,
                username: row.username,
                email: row.email,
            }));
            res.status(200).json(members);
        }
    });
}


module.exports = { getMembers };
