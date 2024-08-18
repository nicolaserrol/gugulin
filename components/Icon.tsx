import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const Icon = (props: any) => {
  const { color, size, type } = props || {};
  switch (type) {
    default: {
      return (
        <Ionicons
          {...props}
          color={color || Colors.default}
          size={size || 24}
        />
      )
    }
  }
};

export default Icon;