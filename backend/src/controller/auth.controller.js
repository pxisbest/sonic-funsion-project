import { User } from "../models/user.model.js";//导入mogodb模型

//  1.	接收用户数据（来自前端或第三方登录服务）
// 	2.	在数据库中查找用户
// 	3.	如果用户不存在，就创建一个新用户
// 	4.	返回成功响应


export const authCallback = async (req, res, next) => {
	try {
		const { id, firstName, lastName, imageUrl } = req.body;

		// check if user already exists
		const user = await User.findOne({ clerkId: id });

		if (!user) {
			// user signup
			await User.create({
				clerkId: id,
				fullName: `${firstName || ""} ${lastName || ""}`.trim(),
				imageUrl,
			});
		}

		res.status(200).json({ success: true });
	} catch (error) {
		console.log("Error in auth callback", error);
		next(error);
	}
};
