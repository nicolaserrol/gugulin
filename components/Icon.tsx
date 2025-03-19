import { Colors } from '@/constants/Colors';
import FeatherIcons from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Icon = (props: any) => {
  const { color, size, type } = props || {};
  let CustomIcon = null;

  switch (type) {
    case "feather": {
      CustomIcon = (
        <FeatherIcons
          {...props}
          color={color || Colors.default}
          size={size || 24}
        />
      );
      break;
    }
    case "material-community": {
      CustomIcon = (
        <MaterialCommunityIcons
          {...props}
          color={color || Colors.default}
          size={size || 24}
        />
      );
      break;
    }
    default: {
      CustomIcon = (
        <Ionicons
          {...props}
          color={color || Colors.default}
          size={size || 24}
        />
      );
      break;
    }
  }
  return CustomIcon;
};

export default Icon;