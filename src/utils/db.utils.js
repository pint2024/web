import { EnumConstants } from "data/enum.constants";

export class DBUtils {
	static checkRevisao = (revisoes) => {
		for (let revisao of revisoes) {
			if (revisao.estado === EnumConstants.ESTADOS.REJEITADO || revisao.estado === EnumConstants.ESTADOS.EM_ANALISE)
				return true;
		}
	};
}
