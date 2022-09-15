import { memo } from "preact/compat";
import { JSX } from "preact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

interface Props {

}

function Logo(props : Props & JSX.HTMLAttributes<HTMLSpanElement>) {
    return <span {...props}>
        T
        <FontAwesomeIcon icon={solid("lemon")} className="mx-1"/>
        ngerie
    </span>;
}

export default memo(Logo);