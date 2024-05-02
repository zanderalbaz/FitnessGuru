






function getMembers(db, req, res) {
    const query = `SELECT member.member_id, member.membership_type, user.username, user.email
                   FROM member JOIN user 
                   ON member.user_id = user.user_id`;

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

function updateMembershipType(db, req, res) {
    const { id } = req.params; 
    const { membershipType } = req.body;

    const updateQuery = `UPDATE member SET membership_type = ? WHERE member_id = ?`;

    db.run(updateQuery, [membershipType, id], function (err) {
        if (err) {
            console.error('Error updating membership type:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json({ message: 'Membership type updated successfully' });
        }
    });
}


module.exports = { getMembers, updateMembershipType };
