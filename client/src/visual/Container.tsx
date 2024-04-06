import styled, { css } from 'styled-components'

type Props = {
    $display?: React.CSSProperties['display']
    $mb?: React.CSSProperties['marginBottom']
    $mt?: React.CSSProperties['marginTop']
    $ml?: React.CSSProperties['marginLeft']
    $mr?: React.CSSProperties['marginRight']
    $justifyContent?: React.CSSProperties['justifyContent']
    $alignItems?: React.CSSProperties['alignItems']
}

export const Container = styled.div<Props>`
    ${({ $mb }) => $mb && css`
        margin-bottom: ${$mb}px;
    `};
    ${({ $mt }) => $mt && css`
        margin-top: ${$mt}px;
    `};
    ${({ $ml }) => $ml && css`
        margin-left: ${$ml}px;
    `};
    ${({ $mr }) => $mr && css`
        margin-right: ${$mr}px;
    `};
    ${({ $display }) => $display && css`
        display: ${$display};
    `};
    ${({ $justifyContent }) => $justifyContent && css`
        justify-content: ${$justifyContent};
    `};
    ${({ $alignItems }) => $alignItems && css`
        align-items: ${$alignItems};
    `};
`
